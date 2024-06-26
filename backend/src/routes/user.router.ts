import { Hono } from "hono";
import { signInUser, signUpUser } from "../handlers";

const userRouter = new Hono();

userRouter.post("/signup", ...signUpUser);
userRouter.post("/signin", ...signInUser);

export { userRouter };
