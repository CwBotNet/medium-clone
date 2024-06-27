import z from "zod";

// user signin / signup type
const signUpInput = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string().optional(),
});

const signInInput = z.object({
  email: z.string().email(),
  password: z.string(),
});

// post type
const createPostInput = z.object({
  title: z.string(),
  content: z.string(),
});

const updatePostInput = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});

export type SignUpType = z.infer<typeof signUpInput>;
export type SignInInput = z.infer<typeof signInInput>;
export type CreatePostInput = z.infer<typeof createPostInput>;
export type UpdatePostInput = z.infer<typeof updatePostInput>;

export { signUpInput, signInInput, createPostInput, updatePostInput };
