import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import satelliteIcon from "@/assets/satellite-icon.png";

const CTASection = () => {
  const [satelliteId, setSatelliteId] = useState("");

  const handleAnalyze = () => {
    if (!satelliteId.trim()) {
      toast.error("Please enter a satellite ID");
      return;
    }
    toast.success(`Analyzing satellite ${satelliteId}...`, {
      description: "AstroCleanAI is processing your request",
    });
    setSatelliteId("");
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={satelliteIcon}
          alt=""
          className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-float"
        />
        <img
          src={satelliteIcon}
          alt=""
          className="absolute bottom-20 right-20 w-12 h-12 opacity-15 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-gradient-space border-secondary/30 shadow-orbital">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Join the Mission for Safer Orbits
            </h2>
            <p className="text-xl text-foreground/80">
              Enter your satellite ID to receive AI-powered collision predictions and safety recommendations
            </p>

            <div className="max-w-md mx-auto space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Enter Satellite ID (e.g., SAT-001)"
                  value={satelliteId}
                  onChange={(e) => setSatelliteId(e.target.value)}
                  className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground"
                  onKeyPress={(e) => e.key === "Enter" && handleAnalyze()}
                />
                <Button
                  onClick={handleAnalyze}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 shadow-glow hover:shadow-orbital transition-all"
                >
                  Analyze
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Get instant collision risk assessment and maneuver recommendations
              </p>
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-secondary">99.7%</p>
                  <p className="text-sm text-muted-foreground">Prediction Accuracy</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">4,852</p>
                  <p className="text-sm text-muted-foreground">Protected Satellites</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">24/7</p>
                  <p className="text-sm text-muted-foreground">Real-Time Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
