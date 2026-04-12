export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  status?: "active" | "wip" | "archived";
}
