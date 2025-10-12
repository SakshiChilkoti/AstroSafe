import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Target, Trophy, Zap } from "lucide-react";
import { toast } from "sonner";

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  maneuvers: number;
}

const GameSection = () => {
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "SpaceGuardian", score: 9850, maneuvers: 47 },
    { rank: 2, name: "OrbitMaster", score: 8720, maneuvers: 42 },
    { rank: 3, name: "AstroDefender", score: 7940, maneuvers: 38 },
    { rank: 4, name: "SatelliteHero", score: 7230, maneuvers: 35 },
    { rank: 5, name: "DebrisWrangler", score: 6880, maneuvers: 33 },
  ];

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setAttempts(0);
    toast.success("Mission Started!", {
      description: "Prevent collisions by adjusting satellite orbits",
    });
  };

  const preventCollision = () => {
    const success = Math.random() > 0.3; // 70% success rate
    setAttempts(attempts + 1);
    
    if (success) {
      const points = Math.floor(Math.random() * 200) + 100;
      setScore(score + points);
      toast.success(`Collision Avoided! +${points} points`, {
        description: "Excellent orbital maneuver!",
      });
    } else {
      toast.error("Collision Occurred!", {
        description: "Try adjusting the trajectory differently",
      });
    }
  };

  const endGame = () => {
    setGameActive(false);
    toast.info(`Mission Complete!`, {
      description: `Final Score: ${score} points with ${attempts} maneuvers`,
    });
  };

  return (
    <section className="py-20 bg-gradient-space">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 className="w-8 h-8 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Collision Prevention Challenge
            </h2>
          </div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Test your skills in orbital mechanics and prevent satellite collisions!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Game Panel */}
          <Card className="lg:col-span-2 p-8 bg-card border-border shadow-card-space">
            <div className="space-y-6">
              {/* Game Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-secondary" />
                    <span className="text-sm text-muted-foreground">Score</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">{score}</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-warning" />
                    <span className="text-sm text-muted-foreground">Maneuvers</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">{attempts}</p>
                </div>
              </div>

              {/* Game Area */}
              <div className="relative aspect-square bg-gradient-to-br from-primary to-primary/50 rounded-lg p-8 flex items-center justify-center">
                {!gameActive ? (
                  <div className="text-center">
                    <Gamepad2 className="w-20 h-20 text-secondary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Ready to Start?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Prevent collisions and climb the leaderboard!
                    </p>
                    <Button
                      onClick={startGame}
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 shadow-glow"
                    >
                      Start Mission
                    </Button>
                  </div>
                ) : (
                  <div className="text-center w-full">
                    <div className="mb-8">
                      <Badge className="text-lg px-4 py-2 bg-destructive text-destructive-foreground">
                        ⚠️ Collision Imminent
                      </Badge>
                    </div>
                    <p className="text-foreground mb-6">
                      Debris approaching at 28,000 km/h!
                      <br />
                      Execute evasive maneuver now!
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Button
                        onClick={preventCollision}
                        size="lg"
                        className="bg-secondary hover:bg-secondary/90"
                      >
                        Execute Maneuver
                      </Button>
                      <Button
                        onClick={endGame}
                        variant="outline"
                        size="lg"
                        className="border-secondary/50"
                      >
                        End Mission
                      </Button>
                    </div>
                  </div>
                )}

                {/* Animated Background Elements */}
                <div className="absolute top-10 left-10 w-3 h-3 bg-secondary rounded-full animate-pulse" />
                <div className="absolute bottom-20 right-20 w-2 h-2 bg-secondary/60 rounded-full animate-pulse delay-75" />
                <div className="absolute top-1/2 right-10 w-3 h-3 bg-secondary/80 rounded-full animate-pulse delay-150" />
              </div>
            </div>
          </Card>

          {/* Leaderboard */}
          <Card className="p-6 bg-card border-border shadow-card-space">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-6 h-6 text-warning" />
              <h3 className="text-xl font-semibold text-foreground">Leaderboard</h3>
            </div>

            <div className="space-y-3">
              {leaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={`p-4 rounded-lg ${
                    entry.rank === 1
                      ? "bg-gradient-to-r from-warning/20 to-warning/10 border border-warning/50"
                      : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-2xl font-bold ${
                          entry.rank === 1
                            ? "text-warning"
                            : entry.rank === 2
                            ? "text-secondary"
                            : "text-muted-foreground"
                        }`}
                      >
                        #{entry.rank}
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">{entry.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {entry.maneuvers} successful maneuvers
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-right text-lg font-bold text-secondary">
                    {entry.score.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-muted/30 text-center">
              <p className="text-sm text-muted-foreground">
                Your Best: <span className="font-bold text-foreground">0</span>
                <br />
                <span className="text-xs">Play to set your record!</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GameSection;
