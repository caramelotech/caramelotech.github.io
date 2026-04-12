import { Globe, Linkedin, Instagram, Github } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Member } from "@/types/member";
import { resolveImagePath } from "@/utils/path";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    {icon}
  </a>
);

const MemberTag = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-muted/50 text-xs font-medium text-foreground">
    {label}
  </span>
);

const MemberCard = ({ member }: { member: Member }) => {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="card-gradient rounded-xl border border-border p-6 flex flex-col items-center text-center gap-4 h-full">
      <Avatar className="h-20 w-20 border-2 border-primary/30">
        <AvatarImage src={resolveImagePath(member.photo)} alt={member.name} loading="lazy" />
        <AvatarFallback className="bg-muted text-foreground text-lg font-bold">
          {initials}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-bold font-heading text-foreground">
          {member.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {member.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {member.tags.map((tag) => (
            <MemberTag key={tag} label={tag} />
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-2">
        {member.website && (
          <SocialLink
            href={member.website}
            icon={<Globe className="h-5 w-5" />}
            label="Site pessoal"
          />
        )}
        {member.linkedin && (
          <SocialLink
            href={member.linkedin}
            icon={<Linkedin className="h-5 w-5" />}
            label="LinkedIn"
          />
        )}
        {member.instagram && (
          <SocialLink
            href={member.instagram}
            icon={<Instagram className="h-5 w-5" />}
            label="Instagram"
          />
        )}
        {member.github && (
          <SocialLink
            href={member.github}
            icon={<Github className="h-5 w-5" />}
            label="GitHub"
          />
        )}
      </div>
    </div>
  );
};

export default MemberCard;
