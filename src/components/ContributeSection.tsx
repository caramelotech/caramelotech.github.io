import { ways } from "@/data/contribute";

const ContributeSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
        🤝 Como <span className="text-gradient">contribuir</span>
      </h3>
      <p className="text-muted-foreground mb-12 text-lg">
        Nenhuma contribuição é pequena demais -{" "}
        <span className="text-primary font-semibold">crescemos juntos!</span>
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {ways.map((w) => (
          <div
            key={w.text}
            className="flex items-center gap-4 p-6 rounded-xl card-gradient border border-border hover:border-primary/40 transition-all duration-300 text-left"
          >
            <div className="text-primary">
              <w.Icon className="h-6 w-6" />
            </div>
            <span className="text-foreground font-medium">{w.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributeSection;
