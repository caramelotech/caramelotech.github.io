import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import MemberCard from "@/components/MemberCard";
import { z } from "zod";
import membersData from "@/data/members.json";
import { MemberSchema } from "@/types/member";

const members = z.array(MemberSchema).parse(membersData);

const MembersSection = () => {
  return (
    <section id="membros" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
          🐾 Nossos <span className="text-gradient">Membros</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
          Conheça quem faz a Caramelo Tech acontecer!
        </p>

        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {members.map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <MemberCard member={member} />
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

export default MembersSection;
