import { Hono } from "hono";
import { Env } from "./utils";
import { blogRouter, userRouter } from "./routes";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: Env;
}>().basePath("/api/v1");

app.use("/*", cors());

// healthCheckRoute
app.get("/healthcheck", (c) => {
  return c.text("healthy server");
});

// routing
app.route("/user", userRouter);
app.route("/blog", blogRouter);

export default app;
