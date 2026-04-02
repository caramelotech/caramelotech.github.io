const people = [
  { emoji: "🧪", role: "QA Engineers" },
  { emoji: "🖥️", role: "Backend Devs" },
  { emoji: "🎨", role: "Frontend Devs" },
  { emoji: "🔄", role: "Fullstack Devs" },
  { emoji: "✏️", role: "Designers" },
];

const techs = [
  { emoji: "⚡", name: "JavaScript" },
  { emoji: "☕", name: "Java" },
  { emoji: "🧬", name: "Clojure" },
  { emoji: "🐘", name: "PHP" },
  { emoji: "🦀", name: "TypeScript" },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16">
          🧩 Pessoas & <span className="text-gradient">Tecnologias</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold font-heading mb-6 text-foreground">
              Uma mistura diversa de entusiastas
            </h3>
            <div className="space-y-3">
              {people.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <span className="text-2xl">{p.emoji}</span>
                  <span className="text-foreground font-medium">{p.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold font-heading mb-6 text-foreground">
              Trabalhando com diversas tecnologias
            </h3>
            <div className="space-y-3">
              {techs.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <span className="text-2xl">{t.emoji}</span>
                  <span className="text-foreground font-medium">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
