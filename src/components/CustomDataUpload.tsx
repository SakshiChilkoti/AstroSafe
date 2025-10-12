import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface SatelliteData {
  name: string;
  orbit: string;
  velocity: string;
  launchDate: string;
}

const CustomDataUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedData, setUploadedData] = useState<SatelliteData | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);

    // Simulate file processing
    setTimeout(() => {
      // Parse mock data (in production, would parse CSV/JSON)
      const mockData: SatelliteData = {
        name: file.name.replace(/\.[^/.]+$/, ""),
        orbit: "LEO (550 km)",
        velocity: "7.57 km/s",
        launchDate: "2024-01-15",
      };

      setUploadedData(mockData);
      setUploading(false);
      
      toast.success("Data Uploaded Successfully!", {
        description: `Processed satellite data for ${mockData.name}`,
      });
    }, 1500);
  };

  const analyzeData = () => {
    if (!uploadedData) return;

    toast.info("Analyzing Collision Risk...", {
      description: "AstroCleanAI is processing your satellite data",
    });

    setTimeout(() => {
      toast.success("Analysis Complete!", {
        description: "Risk Level: Low (8%) - No immediate threats detected",
      });
    }, 2000);
  };

  return (
    <Card className="p-6 bg-card border-border shadow-card-space">
      <div className="flex items-center gap-2 mb-6">
        <Upload className="w-5 h-5 text-secondary" />
        <h3 className="text-xl font-semibold text-foreground">Upload Custom Satellite Data</h3>
      </div>

      <div className="space-y-6">
        {/* Upload Area */}
        <div>
          <Label htmlFor="file-upload" className="text-foreground mb-2 block">
            Upload CSV or JSON file
          </Label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-secondary transition-colors cursor-pointer">
            <Input
              id="file-upload"
              type="file"
              accept=".csv,.json"
              onChange={handleFileUpload}
              className="hidden"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-foreground mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">
                CSV or JSON files (Max 10MB)
              </p>
            </label>
          </div>
        </div>

        {/* Loading State */}
        {uploading && (
          <div className="p-4 rounded-lg bg-secondary/10 border border-secondary animate-pulse">
            <p className="text-sm text-center text-foreground">Processing file...</p>
          </div>
        )}

        {/* Uploaded Data Preview */}
        {uploadedData && !uploading && (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-success/10 border border-success">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <p className="text-sm font-semibold text-foreground">Data Uploaded Successfully</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Satellite Name</p>
                  <p className="text-sm font-medium text-foreground">{uploadedData.name}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Orbit</p>
                  <p className="text-sm font-medium text-foreground">{uploadedData.orbit}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Velocity</p>
                  <p className="text-sm font-medium text-foreground">{uploadedData.velocity}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Launch Date</p>
                  <p className="text-sm font-medium text-foreground">{uploadedData.launchDate}</p>
                </div>
              </div>
            </div>

            <Button
              onClick={analyzeData}
              className="w-full bg-secondary hover:bg-secondary/90"
            >
              Analyze Collision Risk
            </Button>
          </div>
        )}

        {/* Instructions */}
        <div className="p-4 rounded-lg bg-muted/30">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">Required Data Format:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Satellite name/ID</li>
                <li>Orbital parameters (altitude, inclination)</li>
                <li>Velocity vector</li>
                <li>Launch date (optional)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomDataUpload;
