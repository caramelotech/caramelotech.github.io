import carameloMascot from "@/assets/caramelo-mascot.png";
import { Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-float mb-8">
          <img
            src={carameloMascot}
            alt="Caramelo Tech mascote"
            className="mx-auto drop-shadow-2xl w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4">
          <span className="text-gradient">Caramelo</span>{" "}
          <span className="text-foreground">Tech</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-2xl mx-auto">
          Um cantinho acolhedor da internet onde amigos se juntam para{" "}
          <span className="text-primary font-semibold">aprender</span>,{" "}
          <span className="text-primary font-semibold">construir</span> e{" "}
          <span className="text-primary font-semibold">
            compartilhar conhecimento
          </span>{" "}
          💛
        </p>

        <p className="text-muted-foreground mb-8">
          🌍 Fortaleza, Ceará - abertos ao mundo 🌎✨
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-caramelo-dark font-semibold text-lg px-8 animate-pulse-glow"
          >
            <a
              href="https://github.com/caramelotech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              Ver no GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/40 text-primary hover:bg-primary/10 font-semibold text-lg px-8"
          >
            <a
              href="https://www.instagram.com/caramelo_tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
