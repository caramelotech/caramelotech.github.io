import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ProjectsSection from "@/components/ProjectsSection";
import MembersSection from "@/components/MembersSection";
import ContributeSection from "@/components/ContributeSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const SectionDivider = () => (
  <div className="max-w-xs mx-auto border-t border-border/40" />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />

      {/* O que fazemos + Projetos */}
      <section id="oque-fazemos" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-primary/[0.02]" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16">
            🚀 Nossas <span className="text-gradient">Atividades & Projetos</span>
          </h2>

          <WhatWeDoSection />

          <div className="py-16">
            <SectionDivider />
          </div>

          <ProjectsSection />
        </div>
      </section>

      {/* Contribuir + Membros + Junte-se */}
      <section id="comunidade" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16">
            🐾 Nossa <span className="text-gradient">Comunidade</span>
          </h2>

          <MembersSection />

          </div>
        </section>

        {/* Faixa destacada - Como contribuir */}
        <section className="py-20 px-4 bg-muted/50">
          <ContributeSection />

        </section>

        {/* Junte-se a nós */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <JoinSection />
          </div>
        </section>

      <Footer />
    </div>
  );
};

export default Index;
