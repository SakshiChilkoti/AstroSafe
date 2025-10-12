import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Info, TrendingUp } from "lucide-react";

const EducationalCards = () => {
  const facts = [
    {
      title: "Space Debris Count",
      value: "34,000+",
      description: "Objects larger than 10cm tracked in Earth's orbit",
      icon: TrendingUp,
      color: "text-destructive"
    },
    {
      title: "Collision Speed",
      value: "28,000 km/h",
      description: "Average velocity of orbital debris - 7x faster than bullets",
      icon: Info,
      color: "text-warning"
    },
    {
      title: "Kessler Syndrome Risk",
      value: "Growing",
      description: "Cascading collisions could make LEO unusable for generations",
      icon: BookOpen,
      color: "text-destructive"
    }
  ];

  const satelliteInfo = [
    {
      name: "International Space Station",
      operator: "NASA/Roscosmos",
      type: "Space Station",
      orbit: "LEO (408 km)",
      velocity: "7.66 km/s",
      launched: "1998",
      status: "Active"
    },
    {
      name: "Hubble Space Telescope",
      operator: "NASA/ESA",
      type: "Scientific",
      orbit: "LEO (540 km)",
      velocity: "7.59 km/s",
      launched: "1990",
      status: "Active"
    },
    {
      name: "Starlink Constellation",
      operator: "SpaceX",
      type: "Communication",
      orbit: "LEO (550 km)",
      velocity: "7.57 km/s",
      launched: "2019-Present",
      status: "Active - 5000+ satellites"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Space Debris Education
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Understanding the challenge of orbital debris and collision prevention
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {facts.map((fact, index) => (
            <Card key={index} className="p-6 bg-card border-border shadow-card-space hover:shadow-orbital transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-orbital flex items-center justify-center">
                  <fact.icon className={`w-6 h-6 ${fact.color}`} />
                </div>
                <h3 className="font-semibold text-foreground">{fact.title}</h3>
              </div>
              <p className="text-3xl font-bold text-secondary mb-2">{fact.value}</p>
              <p className="text-sm text-muted-foreground">{fact.description}</p>
            </Card>
          ))}
        </div>

        {/* Satellite Info Cards */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-secondary" />
            Notable Satellites & Space Objects
          </h3>
          
          <div className="space-y-4">
            {satelliteInfo.map((sat, index) => (
              <Card key={index} className="p-6 bg-card border-border shadow-card-space hover:border-secondary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-semibold text-foreground">{sat.name}</h4>
                      <Badge variant="outline" className="text-success border-success">
                        {sat.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{sat.operator}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Type</p>
                      <p className="font-medium text-foreground">{sat.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Orbit</p>
                      <p className="font-medium text-foreground">{sat.orbit}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Velocity</p>
                      <p className="font-medium text-foreground">{sat.velocity}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Launch</p>
                      <p className="font-medium text-foreground">{sat.launched}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Collision Avoidance Info */}
        <Card className="mt-12 p-8 bg-gradient-space border-secondary/30 shadow-orbital">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              How Collision Avoidance Works
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Continuous Tracking</h4>
                  <p className="text-muted-foreground">
                    Ground-based radar and telescopes monitor 34,000+ objects larger than 10cm
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">AI Prediction</h4>
                  <p className="text-muted-foreground">
                    Machine learning algorithms predict conjunction events 24-72 hours in advance
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Automated Maneuvers</h4>
                  <p className="text-muted-foreground">
                    Satellites autonomously adjust orbits using thrusters to avoid predicted collisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EducationalCards;
