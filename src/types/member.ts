import { z } from "zod";

export const MemberSchema = z.object({
  name: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  photo: z.string(),
  website: z.string().optional(),
  linkedin: z.string().optional(),
  instagram: z.string().optional(),
  github: z.string().optional(),
});

export type Member = z.infer<typeof MemberSchema>;
