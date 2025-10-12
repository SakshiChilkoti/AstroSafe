import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, ChevronRight, ChevronLeft } from "lucide-react";

const TutorialModal = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps = [
    {
      title: "Welcome to OrbitGuard AI",
      content: "Learn how to use our satellite tracking and collision prediction system to protect orbital assets.",
      image: "🛰️",
    },
    {
      title: "Understanding Collision Risk",
      content: "Risk levels are calculated based on proximity, velocity vectors, and debris density. RED indicates immediate danger, YELLOW requires monitoring, and GREEN is safe.",
      image: "⚠️",
    },
    {
      title: "Using Advanced Filters",
      content: "Search satellites by name, type, country, or launch year. Filter debris and constellations to focus on specific threats.",
      image: "🔍",
    },
    {
      title: "AI Predictions Timeline",
      content: "View predicted collisions for the next 24-72 hours. Each prediction includes probability, time to closest approach, and recommended maneuvers.",
      image: "🤖",
    },
    {
      title: "Simulating Maneuvers",
      content: "Test orbital adjustments before execution. Modify altitude, inclination, and velocity to see how it affects collision risk in real-time.",
      image: "🎯",
    },
    {
      title: "Debris Heatmaps",
      content: "Visualize debris density across LEO, MEO, and GEO. Toggle layers to identify high-risk zones and plan safer orbital paths.",
      image: "🗺️",
    },
    {
      title: "Custom Data Upload",
      content: "Upload your satellite's TLE data or orbital parameters. Our AI will analyze collision risks and provide personalized recommendations.",
      image: "📤",
    },
    {
      title: "Prevention Challenge",
      content: "Test your skills in our gamified collision prevention simulator. Compete on the leaderboard and master orbital mechanics!",
      image: "🎮",
    },
  ];

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = tutorialSteps[currentStep];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="border-secondary/50 hover:bg-secondary/10 gap-2"
        >
          <HelpCircle className="w-5 h-5" />
          Interactive Tutorial
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground flex items-center justify-between">
            {step.title}
            <Badge variant="outline">
              Step {currentStep + 1} of {tutorialSteps.length}
            </Badge>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Learn how to maximize OrbitGuard AI features
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          {/* Step Content */}
          <div className="text-center mb-6">
            <div className="text-8xl mb-4">{step.image}</div>
            <p className="text-lg text-foreground/90 leading-relaxed">{step.content}</p>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {tutorialSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentStep
                    ? "bg-secondary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between gap-4">
            <Button
              onClick={prevStep}
              disabled={currentStep === 0}
              variant="outline"
              className="border-secondary/50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            {currentStep === tutorialSteps.length - 1 ? (
              <DialogTrigger asChild>
                <Button className="bg-secondary hover:bg-secondary/90">
                  Get Started
                </Button>
              </DialogTrigger>
            ) : (
              <Button onClick={nextStep} className="bg-secondary hover:bg-secondary/90">
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TutorialModal;
