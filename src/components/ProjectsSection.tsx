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

const projects = projectsData as Project[];

// Embla needs enough slides beyond the viewport for loop to work.
// Duplicate items when there are few projects to ensure smooth looping.
const getCarouselItems = (items: Project[]): Project[] => {
  if (items.length <= 3) return [...items, ...items, ...items];
  if (items.length <= 6) return [...items, ...items];
  return items;
};

const ProjectsSection = () => {
  const carouselItems = getCarouselItems(projects);

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
      </div>
    </section>
  );
};

export default ProjectsSection;
