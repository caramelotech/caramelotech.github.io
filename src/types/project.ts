import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  github: z.string(),
  demo: z.string().optional(),
  status: z.enum(["active", "wip", "archived"]).optional(),
  category: z.enum(["project", "lab"]).default("project"),
});

export type Project = z.infer<typeof ProjectSchema>;
