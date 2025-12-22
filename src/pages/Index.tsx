import { useState } from "react";
import Hero from "@/components/Hero";
import TabNavigation from "@/components/TabNavigation";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "experience":
        return <ExperienceSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="container max-w-5xl mx-auto">
        {renderSection()}
      </div>
      <Footer />
    </main>
  );
};

export default Index;
