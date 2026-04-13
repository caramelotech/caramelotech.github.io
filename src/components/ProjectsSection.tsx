import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/ProjectCard";
import { z } from "zod";
import projectsData from "@/data/projects.json";
import { ProjectSchema } from "@/types/project";
import type { Project } from "@/types/project";

const projects = z.array(ProjectSchema).parse(projectsData);

const technicalProjects = projects.filter((p) => p.category === "project");
const labProjects = projects.filter((p) => p.category === "lab");

const getCarouselItems = (items: Project[]): Project[] => {
  if (items.length <= 3) return [...items, ...items, ...items];
  if (items.length <= 6) return [...items, ...items];
  return items;
};

const ProjectCarousel = ({ items }: { items: Project[] }) => {
  const carouselItems = getCarouselItems(items);
  return (
    <div className="px-12">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {carouselItems.map((project, index) => (
            <CarouselItem
              key={`${project.id}-${index}`}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

const ProjectGrid = ({ items }: { items: Project[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

const ProjectList = ({ items }: { items: Project[] }) => {
  if (items.length > 3) return <ProjectCarousel items={items} />;
  return <ProjectGrid items={items} />;
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
          🚀 Nossos <span className="text-gradient">Projetos</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center mb-16 max-w-2xl mx-auto">
          Projetos open source criados e mantidos pela comunidade Caramelo Tech.
        </p>

        {/* Technical projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-center mb-3">
            Projetos técnicos
          </h3>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            Aplicações e ferramentas desenvolvidas pela comunidade.
          </p>
          <ProjectList items={technicalProjects} />
        </div>

        {/* Caramelo Labs */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-center mb-3">
            🧪 Caramelo Labs
          </h3>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            Laboratórios de tecnologias com exercícios, exemplos práticos e anotações organizadas para aprendizado hands-on.
          </p>
          <ProjectList items={labProjects} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
