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
    <section id="contribuir" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-primary/[0.02]" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
          🤝 Como <span className="text-gradient">contribuir</span>
        </h2>
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
    </section>
  );
};

export default ContributeSection;
