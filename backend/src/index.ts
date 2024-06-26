import { Hono } from "hono";
import { Env } from "./utils";
import { authCheck } from "./middleware";
import { blogRouter, userRouter } from "./routes";

const app = new Hono<{
  Bindings: Env;
}>().basePath("/api/v1");

// auth middleware
app.use("/blog/*", authCheck);

// healthCheckRoute
app.get("/healthcheck", (c) => {
  return c.text(c.env.DATABASE_URL);
});

// routing
app.route("/user", userRouter);
app.route("/blog", blogRouter);

export default app;
