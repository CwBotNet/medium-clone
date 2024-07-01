import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { factory } from "../utils";

// zod types
import { createPostInput, updatePostInput } from "@rajsahani/medium-common";

const postBlogHandler = factory.createHandlers(async (c) => {
  // db connection
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // user id from middleware context
  const userId = c.get("userId");
  const body = await c.req.json();

  // zod validation
  const { success } = createPostInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }

  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json({
      id: blog.id,
    });
  } catch (error: any) {
    console.log(error?.message);
  }
});

const getBlogById = factory.createHandlers(async (c) => {
  // db connection
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: c.req.param("id"),
      },
    });

    if (!blog) {
      c.status(404);
      return c.json({ error: "Blog not found" });
    }

    return c.json({ response: blog });
  } catch (error: any) {
    console.log(error?.message);
  }
});

const getUserBlogs = factory.createHandlers(async (c) => {
  // db connection
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findMany({
      select: {
        id: true,
        content: true,
        title: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!blog) {
      c.status(404);
      return c.json({ error: "Blog not found" });
    }

    return c.json({ response: blog });
  } catch (error: any) {
    console.log(error?.message);
  }
});

const updateUserBlog = factory.createHandlers(async (c) => {
  // db connection
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // user id from middleware context
  const userId = c.get("userId");
  const body = await c.req.json();

  // zod validation
  const { success } = updatePostInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }

  try {
    const blog = await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    if (!blog) {
      c.status(404);
      return c.json({ error: "Blog not found" });
    }

    return c.json({ response: "blog updated" }, 200);
  } catch (error: any) {
    console.log(error?.message);
  }
});

export { postBlogHandler, getBlogById, getUserBlogs, updateUserBlog };
