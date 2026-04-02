import { Users, Heart, Globe } from "lucide-react";

const highlights = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Comunidade de mentes curiosas",
    description: "Mais do que um grupo de tech — somos pessoas que adoram criar, aprender e se ajudar.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "De Fortaleza pro mundo",
    description: "Baseados no Ceará, mas abertos a qualquer pessoa no mundo que queira colaborar.",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Todo mundo é bem-vindo",
    description: "Iniciante ou experiente, se você curte construir coisas legais — seu lugar é aqui!",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
          🌍 Quem <span className="text-gradient">somos</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
          Uma comunidade brasileira de tecnologia que acredita na colaboração, diversão e código aberto.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="card-gradient rounded-xl p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:glow-border"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">{item.icon}</div>
              <h3 className="text-xl font-bold font-heading mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
