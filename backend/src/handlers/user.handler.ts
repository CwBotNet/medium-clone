import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { factory } from "../utils";
import { sign } from "hono/jwt";
import bcrypt from "bcryptjs";
import { signInInput, signUpInput } from "@rajsahani/medium-common";

const signUpUser = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  // zod validation
  const { success } = signUpInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "invalid Input" });
  }

  try {
    // password encryption before user signup
    const saltRounds = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(body.password, saltRounds);

    const user = await prisma.user.create({
      data: {
        name: body?.name,
        email: body.email,
        password: hashPassword,
      },
    });

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.text(jwt);
  } catch (error: any) {
    console.log(error.message);
    c.status(403);
    return c.json({ error: error.message });
  }
});

const signInUser = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  // zod validation
  const { success } = signInInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "invalid Input" });
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "User not found" });
    }

    // hash Pass check
    const passCheck = bcrypt.compareSync(body.password, user?.password || "");

    if (!passCheck) {
      c.status(403);
      return c.json({ error: "password not matched" });
    }

    console.log({ passCheck: passCheck });

    const userVerify = await sign({ id: user.id }, c.env.JWT_SECRET);
    if (!userVerify) {
      c.status(403);
      return c.json({ error: "not verified user" });
    }
    return c.text(userVerify);
  } catch (error: any) {
    console.log(error.message);
    c.status(403);
    return c.json({ error: error.message });
  }
});

export { signInUser, signUpUser };
