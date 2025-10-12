import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";

interface FilterOptions {
  search: string;
  type: string;
  country: string;
  launchYear: string;
}

interface AdvancedFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const AdvancedFilters = ({ onFilterChange }: AdvancedFiltersProps) => {
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    type: "all",
    country: "all",
    launchYear: "all",
  });

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      search: "",
      type: "all",
      country: "all",
      launchYear: "all",
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <Card className="p-6 bg-card border-border shadow-card-space">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-secondary" />
        <h3 className="text-lg font-semibold text-foreground">Advanced Filters</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search" className="text-foreground">Search by Name/ID</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              id="search"
              placeholder="SAT-001, ISS..."
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        {/* Type */}
        <div className="space-y-2">
          <Label htmlFor="type" className="text-foreground">Satellite Type</Label>
          <Select value={filters.type} onValueChange={(value) => handleFilterChange("type", value)}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="communication">Communication</SelectItem>
              <SelectItem value="weather">Weather</SelectItem>
              <SelectItem value="navigation">Navigation (GPS)</SelectItem>
              <SelectItem value="scientific">Scientific</SelectItem>
              <SelectItem value="military">Military</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Country */}
        <div className="space-y-2">
          <Label htmlFor="country" className="text-foreground">Country/Operator</Label>
          <Select value={filters.country} onValueChange={(value) => handleFilterChange("country", value)}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              <SelectItem value="usa">United States</SelectItem>
              <SelectItem value="russia">Russia</SelectItem>
              <SelectItem value="china">China</SelectItem>
              <SelectItem value="europe">Europe (ESA)</SelectItem>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="japan">Japan</SelectItem>
              <SelectItem value="private">Private Companies</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Launch Year */}
        <div className="space-y-2">
          <Label htmlFor="launchYear" className="text-foreground">Launch Year</Label>
          <Select value={filters.launchYear} onValueChange={(value) => handleFilterChange("launchYear", value)}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2015-2019">2015-2019</SelectItem>
              <SelectItem value="2010-2014">2010-2014</SelectItem>
              <SelectItem value="before-2010">Before 2010</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button onClick={resetFilters} variant="outline" className="border-secondary/50">
          Reset Filters
        </Button>
      </div>
    </Card>
  );
};

export default AdvancedFilters;
