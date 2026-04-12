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

const projects = z.array(ProjectSchema).parse(projectsData);

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
          🚀 Nossos <span className="text-gradient">Projetos</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
          Projetos open source criados e mantidos pela comunidade Caramelo Tech.
        </p>

        <div className="px-12">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2"
                >
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
