// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react";
// import { Progress } from "@/components/ui/progress";
// import TimelinePredictions from "./TimelinePredictions";
// import ManeuverSimulation from "./ManeuverSimulation";
// import DebrisHeatmap from "./DebrisHeatmap";

// const AIDashboard = () => {
//   const [riskLevel, setRiskLevel] = useState(35);

//   const alerts = [
//     {
//       id: 1,
//       satellite: "Thales ISS-1",
//       risk: "high",
//       probability: "78%",
//       time: "4h 32m",
//       maneuver: "Altitude +2km",
//     },
//     {
//       id: 2,
//       satellite: "Communications Sat A",
//       risk: "medium",
//       probability: "42%",
//       time: "12h 15m",
//       maneuver: "Orbital shift",
//     },
//     {
//       id: 3,
//       satellite: "Weather Satellite B",
//       risk: "low",
//       probability: "18%",
//       time: "24h 00m",
//       maneuver: "Monitor only",
//     },
//   ];

//   const getRiskColor = (risk: string) => {
//     switch (risk) {
//       case "high":
//         return "bg-destructive text-destructive-foreground";
//       case "medium":
//         return "bg-warning text-warning-foreground";
//       case "low":
//         return "bg-success text-success-foreground";
//       default:
//         return "bg-muted";
//     }
//   };

//   const runPrediction = () => {
//     setRiskLevel(Math.floor(Math.random() * 100));
//   };

//   return (
//     <section id="ai-insights" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12 space-y-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//             AI Collision Prediction Dashboard
//           </h2>
//           <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
//             Advanced machine learning algorithms predict and prevent satellite collisions
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//           {/* Risk Meter */}
//           <Card className="p-6 bg-card border-border shadow-card-space space-y-4">
//             <div className="flex items-center justify-between">
//               <h3 className="text-lg font-semibold text-foreground">Overall Risk Level</h3>
//               <TrendingUp className="w-5 h-5 text-secondary" />
//             </div>
//             <div className="space-y-2">
//               <Progress value={riskLevel} className="h-3" />
//               <div className="flex justify-between text-sm text-muted-foreground">
//                 <span>Low</span>
//                 <span className="text-foreground font-semibold">{riskLevel}%</span>
//                 <span>High</span>
//               </div>
//             </div>
//             <div className="flex gap-2 pt-2">
//               <div className="flex-1 h-2 bg-success rounded-full" />
//               <div className="flex-1 h-2 bg-warning rounded-full" />
//               <div className="flex-1 h-2 bg-destructive rounded-full" />
//             </div>
//             <Button
//               onClick={runPrediction}
//               className="w-full bg-secondary hover:bg-secondary/90"
//             >
//               Run Prediction
//             </Button>
//           </Card>

//           {/* Statistics Cards */}
//           <div className="space-y-4">
//             <Card className="p-6 bg-card border-border shadow-card-space">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground">Active Satellites</p>
//                   <p className="text-3xl font-bold text-foreground">4,852</p>
//                 </div>
//                 <CheckCircle className="w-10 h-10 text-success" />
//               </div>
//             </Card>

//             <Card className="p-6 bg-card border-border shadow-card-space">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground">Tracked Debris</p>
//                   <p className="text-3xl font-bold text-foreground">12,437</p>
//                 </div>
//                 <AlertTriangle className="w-10 h-10 text-warning" />
//               </div>
//             </Card>

//             <Card className="p-6 bg-card border-border shadow-card-space">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-muted-foreground">Predictions Today</p>
//                   <p className="text-3xl font-bold text-foreground">1,247</p>
//                 </div>
//                 <Clock className="w-10 h-10 text-secondary" />
//               </div>
//             </Card>
//           </div>

//           {/* Collision Alerts */}
//           <Card className="p-6 bg-card border-border shadow-card-space lg:row-span-2">
//             <h3 className="text-lg font-semibold text-foreground mb-4">
//               High-Priority Alerts
//             </h3>
//             <div className="space-y-3">
//               {alerts.map((alert) => (
//                 <div
//                   key={alert.id}
//                   className="p-4 rounded-lg bg-muted/50 border border-border hover:border-secondary transition-colors"
//                 >
//                   <div className="flex items-start justify-between mb-2">
//                     <h4 className="font-semibold text-foreground">{alert.satellite}</h4>
//                     <Badge className={getRiskColor(alert.risk)}>
//                       {alert.risk.toUpperCase()}
//                     </Badge>
//                   </div>
//                   <div className="space-y-1 text-sm">
//                     <p className="text-muted-foreground">
//                       Collision Probability: <span className="text-foreground font-medium">{alert.probability}</span>
//                     </p>
//                     <p className="text-muted-foreground">
//                       Time to Closest Approach: <span className="text-foreground font-medium">{alert.time}</span>
//                     </p>
//                     <p className="text-muted-foreground">
//                       Suggested Maneuver: <span className="text-secondary font-medium">{alert.maneuver}</span>
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <Button
//               variant="outline"
//               className="w-full mt-4 border-secondary/50 hover:bg-secondary/10"
//             >
//               View All Alerts
//             </Button>
//           </Card>
//         </div>

//         {/* Timeline Predictions */}
//         <div className="mt-12">
//           <TimelinePredictions />
//         </div>

//         {/* Maneuver Simulation & Heatmap */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
//           <ManeuverSimulation />
//           <DebrisHeatmap />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AIDashboard;
