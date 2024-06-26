import { factory } from "../utils";

const authCheck = factory.createMiddleware(async (c, next) => {
  const header = c.req.header("authorization") || "";
  const token = header.split(" ")[1];

  if (!token) {
    c.status(403);
    return c.json({ error: "not verified user" });
  }

  await next();
});

export { authCheck };
