import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Layers, TrendingUp } from "lucide-react";

const DebrisHeatmap = () => {
  const [layers, setLayers] = useState({
    leo: true,
    meo: true,
    geo: true,
    riskZones: true,
  });

  const debrisStats = [
    { orbit: "LEO", density: "High", count: "8,437", risk: "high" },
    { orbit: "MEO", density: "Medium", count: "3,241", risk: "medium" },
    { orbit: "GEO", density: "Low", count: "759", risk: "low" },
  ];

  const riskZones = [
    { name: "Critical Zone Alpha", altitude: "400-600km", objects: 4523 },
    { name: "High-Risk Corridor", altitude: "750-850km", objects: 2847 },
    { name: "Debris Hotspot", altitude: "900-1200km", objects: 1924 },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="p-6 bg-card border-border shadow-card-space">
      <div className="flex items-center gap-2 mb-6">
        <Layers className="w-5 h-5 text-secondary" />
        <h3 className="text-xl font-semibold text-foreground">Debris Density & Risk Heatmap</h3>
      </div>

      {/* Layer Controls */}
      <div className="mb-6 p-4 rounded-lg bg-muted/30 space-y-3">
        <h4 className="text-sm font-semibold text-foreground mb-3">Orbital Layers</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-2">
            <Switch
              id="leo"
              checked={layers.leo}
              onCheckedChange={(checked) => setLayers({ ...layers, leo: checked })}
            />
            <Label htmlFor="leo" className="text-sm cursor-pointer">
              LEO (Low Earth Orbit)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="meo"
              checked={layers.meo}
              onCheckedChange={(checked) => setLayers({ ...layers, meo: checked })}
            />
            <Label htmlFor="meo" className="text-sm cursor-pointer">
              MEO (Medium Earth Orbit)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="geo"
              checked={layers.geo}
              onCheckedChange={(checked) => setLayers({ ...layers, geo: checked })}
            />
            <Label htmlFor="geo" className="text-sm cursor-pointer">
              GEO (Geostationary)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="riskZones"
              checked={layers.riskZones}
              onCheckedChange={(checked) => setLayers({ ...layers, riskZones: checked })}
            />
            <Label htmlFor="riskZones" className="text-sm cursor-pointer">
              Risk Heatmap
            </Label>
          </div>
        </div>
      </div>

      {/* Density Statistics */}
      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-semibold text-foreground">Debris Density by Orbit</h4>
        {debrisStats.map((stat, index) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-muted/50 flex items-center justify-between"
          >
            <div>
              <p className="font-semibold text-foreground">{stat.orbit}</p>
              <p className="text-sm text-muted-foreground">{stat.count} tracked objects</p>
            </div>
            <Badge className={getRiskColor(stat.risk)}>
              {stat.density}
            </Badge>
          </div>
        ))}
      </div>

      {/* Risk Zones */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-destructive" />
          <h4 className="text-sm font-semibold text-foreground">High-Risk Zones</h4>
        </div>
        {riskZones.map((zone, index) => (
          <div
            key={index}
            className="p-3 rounded-lg border border-destructive/30 bg-destructive/5"
          >
            <p className="font-semibold text-foreground mb-1">{zone.name}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Altitude: {zone.altitude}</span>
              <span className="text-destructive font-medium">{zone.objects} objects</span>
            </div>
          </div>
        ))}
      </div>

      {/* Heatmap Legend */}
      <div className="mt-6 p-4 rounded-lg bg-muted/30">
        <p className="text-xs font-semibold text-foreground mb-2">Density Legend:</p>
        <div className="flex gap-2">
          <div className="flex-1 h-6 bg-gradient-to-r from-success via-warning to-destructive rounded" />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
      </div>
    </Card>
  );
};

export default DebrisHeatmap;
