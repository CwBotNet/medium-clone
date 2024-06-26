import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { factory } from "../utils";

const postBlogHandler = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  return c.text(c.env.DATABASE_URL);
});

const getBlogById = factory.createHandlers(async (c) => {});
const getUserBlogs = factory.createHandlers(async (c) => {});
const updateUserBlog = factory.createHandlers(async (c) => {});

export { postBlogHandler, getBlogById, getUserBlogs, updateUserBlog };
