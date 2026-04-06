const activities = [
  { emoji: "🤝", text: "Trocar conhecimento e experiências" },
  { emoji: "🛠️", text: "Construir projetos juntos" },
  { emoji: "🌱", text: "Aprender novas tecnologias" },
  { emoji: "💡", text: "Experimentar com ideias" },
  { emoji: "🧪", text: "Contribuir para open source" },
];

const people = [
  { emoji: "🧪", label: "QA Engineers" },
  { emoji: "🖥️", label: "Backend Devs" },
  { emoji: "🎨", label: "Frontend Devs" },
  { emoji: "🔄", label: "Fullstack Devs" },
  { emoji: "✏️", label: "Designers" },
];

const techs = [
  { emoji: "⚡", label: "JavaScript" },
  { emoji: "☕", label: "Java" },
  { emoji: "🧬", label: "Clojure" },
  { emoji: "🐘", label: "PHP" },
  { emoji: "🦀", label: "TypeScript" },
];

const WhatWeDoSection = () => {
  return (
    <section id="oque-fazemos" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-primary/[0.02]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
          👩‍💻 O que <span className="text-gradient">fazemos</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          A maioria dos nossos projetos são{" "}
          <span className="text-primary font-semibold">open source</span> -
          sinta-se à vontade para explorar, aprender e contribuir!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {activities.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-muted/50 transition-all duration-300 group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">
                {item.emoji}
              </span>
              <span className="text-foreground font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold font-heading mb-6 text-foreground">
              🧩 Uma mistura diversa de entusiastas
            </h3>
            <div className="flex flex-wrap gap-3">
              {people.map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:border-primary/40 transition-colors"
                >
                  <span>{p.emoji}</span> {p.label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold font-heading mb-6 text-foreground">
              ⚙️ Trabalhando com diversas tecnologias
            </h3>
            <div className="flex flex-wrap gap-3">
              {techs.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:border-primary/40 transition-colors"
                >
                  <span>{t.emoji}</span> {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
