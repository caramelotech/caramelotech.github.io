import { Star, Bug, GitPullRequest, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContributeWay {
  Icon: LucideIcon;
  text: string;
}

export const ways: ContributeWay[] = [
  { Icon: Star, text: "Dê uma ⭐ nos repos que curtir" },
  { Icon: Bug, text: "Abra issues com bugs ou sugestões" },
  { Icon: GitPullRequest, text: "Envie pull requests" },
  { Icon: MessageSquare, text: "Compartilhe ideias" },
];
