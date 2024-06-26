import { createFactory } from "hono/factory";

type Env = {
  DATABASE_URL: string;
};

const factory = createFactory();

export { factory, Env };
