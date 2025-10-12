import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Satellite, Trash2, Radio, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import AdvancedFilters from "./AdvancedFilters";
import CustomDataUpload from "./CustomDataUpload";

interface SatelliteData {
  id: string;
  name: string;
  type: "active" | "debris" | "high-risk";
  orbit: string;
  velocity: string;
  x: number;
  y: number;
}

interface FilterOptions {
  search: string;
  type: string;
  country: string;
  launchYear: string;
}

const VisualizationSection = () => {
  const [filter, setFilter] = useState<"all" | "active" | "debris" | "high-risk">("all");
  const [advancedFilters, setAdvancedFilters] = useState<FilterOptions>({
    search: "",
    type: "all",
    country: "all",
    launchYear: "all",
  });

  const satellites: SatelliteData[] = [
    { id: "SAT-001", name: "Thales ISS-1", type: "active", orbit: "LEO", velocity: "7.8 km/s", x: 35, y: 45 },
    { id: "SAT-002", name: "Communications Satellite", type: "active", orbit: "GEO", velocity: "3.1 km/s", x: 65, y: 30 },
    { id: "DEB-001", name: "Debris Fragment", type: "debris", orbit: "LEO", velocity: "7.5 km/s", x: 50, y: 60 },
    { id: "SAT-003", name: "Weather Satellite", type: "high-risk", orbit: "MEO", velocity: "4.2 km/s", x: 70, y: 70 },
    { id: "SAT-004", name: "GPS Constellation", type: "active", orbit: "MEO", velocity: "3.9 km/s", x: 25, y: 25 },
    { id: "DEB-002", name: "Rocket Stage", type: "debris", orbit: "LEO", velocity: "7.6 km/s", x: 80, y: 45 },
  ];

  const filteredSatellites = satellites.filter((sat) => {
    // Basic filter
    if (filter !== "all" && sat.type !== filter) return false;
    
    // Advanced filters
    if (advancedFilters.search && !sat.name.toLowerCase().includes(advancedFilters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const getColorByType = (type: string) => {
    switch (type) {
      case "active":
        return "bg-success";
      case "high-risk":
        return "bg-destructive";
      case "debris":
        return "bg-muted-foreground";
      default:
        return "bg-secondary";
    }
  };

  return (
    <section id="visualization" className="py-20 bg-gradient-space">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Real-Time 3D Satellite Visualization
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Track satellites and space debris in real-time with our interactive orbital map
          </p>
        </div>

        {/* Advanced Filters */}
        <div className="mb-8">
          <AdvancedFilters onFilterChange={setAdvancedFilters} />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            onClick={() => setFilter("all")}
            variant={filter === "all" ? "default" : "outline"}
            className="rounded-xl"
          >
            <Radio className="w-4 h-4 mr-2" />
            All Objects
          </Button>
          <Button
            onClick={() => setFilter("active")}
            variant={filter === "active" ? "default" : "outline"}
            className="rounded-xl"
          >
            <Satellite className="w-4 h-4 mr-2" />
            Active Satellites
          </Button>
          <Button
            onClick={() => setFilter("debris")}
            variant={filter === "debris" ? "default" : "outline"}
            className="rounded-xl"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Debris
          </Button>
          <Button
            onClick={() => setFilter("high-risk")}
            variant={filter === "high-risk" ? "default" : "outline"}
            className="rounded-xl"
          >
            High Risk
          </Button>
        </div>

        {/* Visualization */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card border-border shadow-card-space overflow-hidden">
            <div className="relative aspect-square bg-gradient-to-br from-primary to-primary/50 rounded-lg p-8">
              {/* Earth Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-glow" />
                <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-pulse" />
              </div>

              {/* Orbital Paths */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-64 h-64 rounded-full border border-secondary/20" />
                <div className="w-80 h-80 rounded-full border border-secondary/15 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="w-96 h-96 rounded-full border border-secondary/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Satellites */}
              {filteredSatellites.map((sat, index) => (
                <div
                  key={sat.id}
                  className="absolute group cursor-pointer"
                  style={{ left: `${sat.x}%`, top: `${sat.y}%` }}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${getColorByType(sat.type)} shadow-glow animate-pulse`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                  <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <p className="text-sm font-semibold text-foreground">{sat.name}</p>
                      <p className="text-xs text-muted-foreground">Orbit: {sat.orbit}</p>
                      <p className="text-xs text-muted-foreground">Velocity: {sat.velocity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="p-6 bg-card/50 border-t border-border">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-sm text-foreground">Active Satellites</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="text-sm text-foreground">High-Risk Collision</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                  <span className="text-sm text-foreground">Debris</span>
                </div>
              </div>
            </div>

            {/* 3D Visualization Link */}
            <div className="p-6 bg-card/50 border-t border-border">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Want to explore in full 3D with real-time tracking?
                </p>
                <Button
                  onClick={() => window.open("https://stuffin.space/", "_blank")}
                  className="bg-secondary hover:bg-secondary/90 gap-2"
                >
                  Launch 3D Visualization
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Custom Data Upload */}
        <div className="mt-12">
          <CustomDataUpload />
        </div>
      </div>
    </section>
  );
};

export default VisualizationSection;
