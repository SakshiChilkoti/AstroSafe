import { Card } from "@/components/ui/card";
import { Satellite, Brain, Shield, BarChart3, Lock, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Satellite,
      title: "Real-Time Tracking",
      description: "Monitor satellites and debris with our interactive 3D orbital map, updated every second.",
      color: "text-secondary",
    },
    {
      icon: Brain,
      title: "AI-Powered Prediction",
      description: "Advanced machine learning algorithms forecast collision risks and probability with high accuracy.",
      color: "text-success",
    },
    {
      icon: Shield,
      title: "Autonomous Maneuvers",
      description: "Intelligent system suggests optimal orbital adjustments to prevent collisions automatically.",
      color: "text-warning",
    },
    {
      icon: BarChart3,
      title: "Debris Statistics",
      description: "Comprehensive analytics on debris count, density distribution, and high-risk orbital zones.",
      color: "text-destructive",
    },
    {
      icon: Lock,
      title: "Privacy & Security",
      description: "End-to-end encrypted alerts for sensitive satellite information and secure data transmission.",
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Receive real-time notifications for critical collision warnings and system updates.",
      color: "text-warning",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-space">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Powerful Features for Orbital Safety
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Everything you need to protect your satellites and ensure sustainable space operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border shadow-card-space hover:shadow-orbital transition-all duration-300 group hover:scale-105"
            >
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-orbital flex items-center justify-center shadow-glow group-hover:shadow-orbital transition-all duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
