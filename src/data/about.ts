import { Users, Heart, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Highlight {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const highlights: Highlight[] = [
  {
    Icon: Users,
    title: "Comunidade de mentes curiosas",
    description:
      "Mais do que um grupo de tech - somos pessoas que adoram criar, aprender e se ajudar.",
  },
  {
    Icon: Globe,
    title: "De Fortaleza pro mundo",
    description:
      "Baseados no Ceará, mas abertos a qualquer pessoa no mundo que queira colaborar.",
  },
  {
    Icon: Heart,
    title: "Todo mundo é bem-vindo",
    description:
      "Iniciante ou experiente, se você curte construir coisas legais - seu lugar é aqui!",
  },
];
