import { Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { emoji: "🫶", text: "Colaboração acima de competição" },
  { emoji: "📚", text: "Aprender fazendo" },
  { emoji: "🧩", text: "Diversidade de ideias e pessoas" },
  { emoji: "🐶", text: "Se divertir enquanto coda" },
];

const JoinSection = () => {
  return (
    <section id="junte-se" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
          🚀 Junte-se a <span className="text-gradient">nós!</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">Acreditamos em:</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {values.map((v, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:border-primary/40 transition-colors"
            >
              <span>{v.emoji}</span> {v.text}
            </span>
          ))}
        </div>

        <p className="text-xl text-muted-foreground mb-8">
          Se você é apaixonado por tecnologia e comunidade, vem fazer parte da{" "}
          <span className="text-primary font-bold">Caramelo Tech</span>! 🐕
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-caramelo-dark font-semibold text-lg px-8"
          >
            <a href="https://github.com/caramelotech" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/40 text-primary hover:bg-primary/10 font-semibold text-lg px-8"
          >
            <a href="https://www.instagram.com/caramelo_tech" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
