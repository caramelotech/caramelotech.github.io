import { activities, people, techs } from "@/data/whatWeDo";
import Tag from "@/components/Tag";

const WhatWeDoSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold font-heading text-center mb-4">
        👩‍💻 O que <span className="text-gradient">fazemos</span>
      </h3>
      <p className="text-muted-foreground text-center mb-16 text-lg">
        A maioria dos nossos projetos são{" "}
        <span className="text-primary font-semibold">open source</span> -
        sinta-se à vontade para explorar, aprender e contribuir!
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {activities.map((item) => (
          <div
            key={item.text}
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
            {people.map((p) => (
              <Tag key={p.label}>
                <span>{p.emoji}</span> {p.label}
              </Tag>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold font-heading mb-6 text-foreground">
            ⚙️ Trabalhando com diversas tecnologias
          </h3>
          <div className="flex flex-wrap gap-3">
            {techs.map((t) => (
              <Tag key={t.label}>
                <span>{t.emoji}</span> {t.label}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
