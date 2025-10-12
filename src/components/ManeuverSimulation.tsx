import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Navigation, TrendingUp, TrendingDown, RotateCw } from "lucide-react";
import { toast } from "sonner";

const ManeuverSimulation = () => {
  const [altitude, setAltitude] = useState([0]);
  const [inclination, setInclination] = useState([0]);
  const [velocity, setVelocity] = useState([0]);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateManeuver = () => {
    setIsSimulating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const riskReduction = Math.abs(altitude[0]) + Math.abs(inclination[0]) + Math.abs(velocity[0]);
      const newRisk = Math.max(5, 78 - riskReduction);
      
      setIsSimulating(false);
      toast.success(`Maneuver Simulated!`, {
        description: `New collision risk: ${newRisk}% (${78 - newRisk}% reduction)`,
      });
    }, 2000);
  };

  const resetManeuver = () => {
    setAltitude([0]);
    setInclination([0]);
    setVelocity([0]);
  };

  return (
    <Card className="p-6 bg-card border-border shadow-card-space">
      <div className="flex items-center gap-2 mb-6">
        <Navigation className="w-5 h-5 text-secondary" />
        <h3 className="text-xl font-semibold text-foreground">Autonomous Maneuver Simulation</h3>
      </div>

      <div className="space-y-6">
        {/* Current Risk Status */}
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Current Risk Level</span>
            <Badge variant="destructive">HIGH • 78%</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Satellite: Thales ISS-1 | Time to closest approach: 4h 32m
          </p>
        </div>

        {/* Maneuver Controls */}
        <div className="space-y-4">
          {/* Altitude Adjustment */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-foreground">Altitude Adjustment</Label>
              <div className="flex items-center gap-2">
                {altitude[0] > 0 ? (
                  <TrendingUp className="w-4 h-4 text-success" />
                ) : altitude[0] < 0 ? (
                  <TrendingDown className="w-4 h-4 text-destructive" />
                ) : null}
                <span className="text-sm font-medium text-foreground">
                  {altitude[0] > 0 ? "+" : ""}{altitude[0]} km
                </span>
              </div>
            </div>
            <Slider
              value={altitude}
              onValueChange={setAltitude}
              min={-10}
              max={10}
              step={0.5}
              className="w-full"
            />
          </div>

          {/* Inclination Adjustment */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-foreground">Orbital Inclination</Label>
              <span className="text-sm font-medium text-foreground">
                {inclination[0] > 0 ? "+" : ""}{inclination[0]}°
              </span>
            </div>
            <Slider
              value={inclination}
              onValueChange={setInclination}
              min={-5}
              max={5}
              step={0.1}
              className="w-full"
            />
          </div>

          {/* Velocity Adjustment */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-foreground">Velocity Change</Label>
              <span className="text-sm font-medium text-foreground">
                {velocity[0] > 0 ? "+" : ""}{velocity[0]} m/s
              </span>
            </div>
            <Slider
              value={velocity}
              onValueChange={setVelocity}
              min={-100}
              max={100}
              step={5}
              className="w-full"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={simulateManeuver}
            disabled={isSimulating}
            className="flex-1 bg-secondary hover:bg-secondary/90"
          >
            {isSimulating ? (
              <>
                <RotateCw className="w-4 h-4 mr-2 animate-spin" />
                Simulating...
              </>
            ) : (
              "Simulate Maneuver"
            )}
          </Button>
          <Button onClick={resetManeuver} variant="outline" className="border-secondary/50">
            Reset
          </Button>
        </div>

        {/* Recommendations */}
        <div className="p-4 rounded-lg bg-muted/50">
          <h4 className="text-sm font-semibold text-foreground mb-2">AI Recommendations:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Altitude increase of +2km will reduce collision probability to 12%</li>
            <li>• Execute maneuver within next 2 hours for optimal results</li>
            <li>• Fuel cost: ~15kg propellant</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ManeuverSimulation;
