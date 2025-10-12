import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EducationalCards from "@/components/EducationalCards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TutorialModal from "@/components/TutorialModal";
import VisualizationEmbedded from "@/components/VisualizationEmbedded";
import AIInsightsSection from "@/components/AIInsightsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />

        <div className="py-8 bg-background flex justify-center">
          <TutorialModal />
        </div>

       
        // <VisualizationEmbedded />

        <AIInsightsSection /> 

        <FeaturesSection />
        <EducationalCards />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
