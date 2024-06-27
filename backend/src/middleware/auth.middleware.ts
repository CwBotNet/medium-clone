import { verify } from "hono/jwt";
import { factory } from "../utils";

const authCheck = factory.createMiddleware(async (c, next) => {
  const header = c.req.header("authorization") || "";
  const token = header.split(" ")[1];

  const user = await verify(token, c.env.JWT_SECRET);

  if (!user) {
    c.status(403);
    return c.json({ error: "not a valid token" });
  }
  // sending the user id from context
  c.set("userId", user.id);
  await next();
});

export { authCheck };
