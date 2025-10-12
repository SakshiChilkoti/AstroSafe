import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VisualizationSection from "@/components/VisualizationSection";
import AIDashboard from "@/components/AIDashboard";
import FeaturesSection from "@/components/FeaturesSection";
import EducationalCards from "@/components/EducationalCards";
import GameSection from "@/components/GameSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TutorialModal from "@/components/TutorialModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        
        {/* Tutorial Button Section */}
        <div className="py-8 bg-background flex justify-center">
          <TutorialModal />
        </div>
        
        <VisualizationSection />
        <AIDashboard />
        <FeaturesSection />
        <EducationalCards />
        <GameSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
