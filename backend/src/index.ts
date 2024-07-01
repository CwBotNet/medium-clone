import { Hono } from "hono";
import { Env } from "./utils";
import { blogRouter, userRouter } from "./routes";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: Env;
}>().basePath("/api/v1");

app.use("/api/*", cors());

// healthCheckRoute
app.get("/healthcheck", (c) => {
  return c.text(c.env.DATABASE_URL);
});

// routing
app.route("/user", userRouter);
app.route("/blog", blogRouter);

export default app;
