import { Hono } from "hono";
import {
  getBlogById,
  getUserBlogs,
  postBlogHandler,
  updateUserBlog,
} from "../handlers";
import { authCheck } from "../middleware";

const blogRouter = new Hono();

// auth middleware
blogRouter.use("/*", authCheck);

blogRouter.get("/bulk", ...getUserBlogs);
blogRouter.post("/", ...postBlogHandler);
blogRouter.put("/", ...updateUserBlog);
blogRouter.get("/:id", ...getBlogById);

export { blogRouter };
