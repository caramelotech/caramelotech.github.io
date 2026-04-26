import { Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Tag from "@/components/Tag";
import { values } from "@/data/values";

const JoinSection = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
        🚀 Junte-se a <span className="text-gradient">nós!</span>
      </h3>
      <p className="text-muted-foreground text-lg mb-10">Acreditamos em:</p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {values.map((v) => (
          <Tag key={v.text}>
            <span>{v.emoji}</span> {v.text}
          </Tag>
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
  );
};

export default JoinSection;
