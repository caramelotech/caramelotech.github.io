import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import TechStackSection from "@/components/TechStackSection";
import ContributeSection from "@/components/ContributeSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <TechStackSection />
      <ContributeSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
