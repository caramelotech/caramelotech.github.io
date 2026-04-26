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
    <div>
      <h3 className="text-2xl md:text-3xl font-bold font-heading text-center mb-3">
        🐾 Nossos <span className="text-gradient">Membros</span>
      </h3>
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
            {members.map((member) => (
              <CarouselItem key={member.name} className="md:basis-1/2 lg:basis-1/3">
                <MemberCard member={member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default MembersSection;
