import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/earth-space-hero.jpg";

const HeroSection = () => {
  const scrollToVisualization = () => {
    const element = document.querySelector("#visualization");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Earth from space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-background/95" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-secondary rounded-full animate-pulse" />
        <div className="absolute top-40 right-40 w-3 h-3 bg-secondary/60 rounded-full animate-pulse delay-75" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-secondary/80 rounded-full animate-pulse delay-150" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-secondary/30">
            <span className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-foreground">Real-time Satellite Monitoring</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent">
              AstroSafe
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-secondary">
              Safer Space for Satellites
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Real-time satellite tracking and AI-powered collision prediction for a sustainable orbital environment.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={scrollToVisualization}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg rounded-xl shadow-orbital hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Explore the Orbit Map
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-secondary/50 hover:bg-secondary/10 text-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-secondary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
