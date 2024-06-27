import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { factory } from "../utils";
import { sign, verify } from "hono/jwt";
import bcrypt from "bcryptjs";

const signUpUser = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { name, email, password } = await c.req.json();

  try {
    // password encryption before user signup
    const saltRounds = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, saltRounds);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token: jwt });
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
  const { email, password } = await c.req.json();
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "User not found" });
    }

    // hash Pass check
    const passCheck = bcrypt.compareSync(password, user?.password || "");

    if (!passCheck) {
      c.status(403);
      return c.json({ error: "password not matched" });
    }

    console.log({ passCheck: passCheck });

    const header = c.req.header("authorization") || "";

    const token = header.split(" ")[1];
    const userVerify = await verify(token, c.env.JWT_SECRET);
    if (!userVerify) {
      c.status(403);
      return c.json({ error: "not veerified user" });
    }
    return c.json({ response: "success", user: user.id }, 200);
  } catch (error: any) {
    console.log(error.message);
    c.status(403);
    return c.json({ error: error.message });
  }
});

export { signInUser, signUpUser };
