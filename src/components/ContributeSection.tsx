import { Star, Bug, GitPullRequest, MessageSquare } from "lucide-react";

const ways = [
  {
    icon: <Star className="h-6 w-6" />,
    text: "Dê uma ⭐ nos repos que curtir",
  },
  {
    icon: <Bug className="h-6 w-6" />,
    text: "Abra issues com bugs ou sugestões",
  },
  { icon: <GitPullRequest className="h-6 w-6" />, text: "Envie pull requests" },
  { icon: <MessageSquare className="h-6 w-6" />, text: "Compartilhe ideias" },
];

const ContributeSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center bg-muted/50 rounded-2xl p-8 md:p-12 border border-border">
      <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
        🤝 Como <span className="text-gradient">contribuir</span>
      </h3>
      <p className="text-muted-foreground mb-12 text-lg">
        Nenhuma contribuição é pequena demais -{" "}
        <span className="text-primary font-semibold">crescemos juntos!</span>
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {ways.map((w, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-6 rounded-xl card-gradient border border-border hover:border-primary/40 transition-all duration-300 text-left"
          >
            <div className="text-primary">{w.icon}</div>
            <span className="text-foreground font-medium">{w.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributeSection;
