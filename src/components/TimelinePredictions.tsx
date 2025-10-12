import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertTriangle, CheckCircle } from "lucide-react";

interface Prediction {
  time: string;
  satellite: string;
  risk: "low" | "medium" | "high";
  probability: string;
  details: string;
}

const TimelinePredictions = () => {
  const predictions: Prediction[] = [
    {
      time: "4h 32m",
      satellite: "Thales ISS-1",
      risk: "high",
      probability: "78%",
      details: "Close approach with debris DEB-442. Recommended altitude adjustment +2km."
    },
    {
      time: "12h 15m",
      satellite: "Communications Sat A",
      risk: "medium",
      probability: "42%",
      details: "Potential conjunction with inactive satellite. Monitor trajectory."
    },
    {
      time: "18h 45m",
      satellite: "Weather Satellite B",
      risk: "low",
      probability: "18%",
      details: "Low-risk pass near debris field. No action required."
    },
    {
      time: "24h 00m",
      satellite: "GPS Constellation-3",
      risk: "medium",
      probability: "35%",
      details: "Crossing high-density LEO zone. Consider orbital adjustment."
    },
    {
      time: "36h 20m",
      satellite: "Scientific Probe X",
      risk: "low",
      probability: "12%",
      details: "Standard orbital path. Collision risk minimal."
    },
    {
      time: "48h 10m",
      satellite: "Navigation Sat-7",
      risk: "high",
      probability: "65%",
      details: "Multiple debris fragments detected. Immediate maneuver planning required."
    },
    {
      time: "60h 30m",
      satellite: "Earth Observation 2",
      risk: "medium",
      probability: "38%",
      details: "Approaching congested orbital corridor. Enhanced monitoring active."
    },
    {
      time: "72h 00m",
      satellite: "Comm Relay Station",
      risk: "low",
      probability: "15%",
      details: "Clear trajectory for next 72 hours. Routine monitoring continues."
    },
  ];

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "high":
        return <AlertTriangle className="w-5 h-5 text-destructive" />;
      case "medium":
        return <Clock className="w-5 h-5 text-warning" />;
      case "low":
        return <CheckCircle className="w-5 h-5 text-success" />;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "bg-destructive/10 border-destructive";
      case "medium":
        return "bg-warning/10 border-warning";
      case "low":
        return "bg-success/10 border-success";
    }
  };

  return (
    <Card className="p-6 bg-card border-border shadow-card-space">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-secondary" />
        <h3 className="text-xl font-semibold text-foreground">24-72 Hour Prediction Timeline</h3>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
        {predictions.map((pred, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border-2 ${getRiskColor(pred.risk)} hover:shadow-orbital transition-all`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                {getRiskIcon(pred.risk)}
                <div>
                  <h4 className="font-semibold text-foreground">{pred.satellite}</h4>
                  <p className="text-sm text-muted-foreground">T-{pred.time}</p>
                </div>
              </div>
              <Badge variant="outline" className="capitalize">
                {pred.risk} Risk • {pred.probability}
              </Badge>
            </div>
            <p className="text-sm text-foreground/80">{pred.details}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TimelinePredictions;
