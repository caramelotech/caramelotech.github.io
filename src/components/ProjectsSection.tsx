import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

const projects: Project[] = projectsData;

const ProjectsGrid = ({ items }: { items: Project[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

const ProjectsCarousel = ({ items }: { items: Project[] }) => (
  <div className="px-12">
    <Carousel opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {items.map((project) => (
          <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

const ProjectsSection = () => {
  const useCarousel = projects.length > 3;

  return (
    <section id="projetos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
          🚀 Nossos <span className="text-gradient">Projetos</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
          Projetos open source criados e mantidos pela comunidade Caramelo Tech.
        </p>

        {useCarousel ? (
          <ProjectsCarousel items={projects} />
        ) : (
          <ProjectsGrid items={projects} />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
