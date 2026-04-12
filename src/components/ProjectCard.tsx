import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

const statusLabels: Record<string, string> = {
  active: "Ativo",
  wip: "Em desenvolvimento",
  archived: "Arquivado",
};

const StatusBadge = ({ status }: { status?: string }) => {
  if (!status) return null;
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
      {statusLabels[status] ?? status}
    </span>
  );
};

const ProjectTag = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-muted/50 text-xs font-medium text-foreground">
    {label}
  </span>
);

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card-gradient rounded-xl border border-border p-6 flex flex-col gap-4 h-full">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold font-heading text-foreground">
          {project.name}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 justify-center">
        {project.tags.map((tag) => (
          <ProjectTag key={tag} label={tag} />
        ))}
      </div>

      <div className="flex gap-2 mt-auto pt-2 justify-center">
        <Button variant="outline" size="sm" asChild>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            Código
          </a>
        </Button>
        {project.demo && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
