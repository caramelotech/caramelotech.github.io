const activities = [
  { emoji: "🤝", text: "Trocar conhecimento e experiências" },
  { emoji: "🛠️", text: "Construir projetos juntos" },
  { emoji: "🌱", text: "Aprender novas tecnologias" },
  { emoji: "💡", text: "Experimentar com ideias" },
  { emoji: "🧪", text: "Contribuir para open source" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </div>
    </section>
  );
};

export default WhatWeDoSection;
