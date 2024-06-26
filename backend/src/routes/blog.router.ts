import { Hono } from "hono";
import {
  getBlogById,
  getUserBlogs,
  postBlogHandler,
  updateUserBlog,
} from "../handlers";

const blogRouter = new Hono();

blogRouter.post("/", ...postBlogHandler);
blogRouter.put("/", ...updateUserBlog);
blogRouter.get("/:id", ...getBlogById);
blogRouter.get("/bulk", ...getUserBlogs);

export { blogRouter };
