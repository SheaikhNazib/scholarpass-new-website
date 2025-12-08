import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GlobeIcon,
  MapPinIcon,
  StarIcon,
  ClockIcon,
  Building2Icon,
  ChevronRightIcon,
} from "@/components/icons";

export default function LearningHubNetworkSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
          <GlobeIcon />
          <span className="font-semibold">LearningHub Network</span>
          <span className="text-muted-foreground">→ Find physical centers near you</span>
        </div>

        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <GlobeIcon />
            LearningHub Network
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
            5,000+ Physical Learning Centers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Find a LearningHub near you for in-person courses, tutoring, STEM labs, and community learning
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8 border-2 border-blue-100">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="md:col-span-2">
                <label className="text-sm font-medium mb-2 block">Location</label>
                <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                  <MapPinIcon />
                  <Input
                    placeholder="Enter city, ZIP code, or neighborhood"
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                    defaultValue="San Francisco"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Hub Type</label>
                <Select defaultValue="all">
                  <SelectTrigger className="h-12 bg-white dark:bg-slate-800 border-2 border-blue-200 dark:border-blue-800">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="full">Full Center</SelectItem>
                    <SelectItem value="stem">STEM Lab</SelectItem>
                    <SelectItem value="tutoring">Tutoring Only</SelectItem>
                    <SelectItem value="bootcamp">Bootcamp Center</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button size="lg" className="w-full md:w-auto px-8">
              <MapPinIcon />
              Find LearningHubs Near Me
            </Button>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                <span>Showing 3 hubs near San Francisco, CA</span>
                <Button variant="link" className="text-blue-600 dark:text-blue-400 p-0 h-auto">
                  View all 127 hubs →
                </Button>
              </div>

              {[
                {
                  name: "ScholarPASS San Francisco Hub",
                  address: "123 Market St, SF, CA 94103",
                  distance: "0.8 mi",
                  type: "Full Center",
                  features: ["Tutoring", "STEM Lab", "Bootcamps", "Devices"],
                  hours: "Mon-Sat 9AM-9PM",
                  rating: "4.9",
                },
                {
                  name: "TechLearn STEM Lab",
                  address: "456 Mission St, SF, CA 94105",
                  distance: "1.2 mi",
                  type: "STEM Lab",
                  features: ["Robotics", "Coding", "AI Classes"],
                  hours: "Mon-Fri 3PM-8PM",
                  rating: "5.0",
                },
                {
                  name: "Bay Area Tutoring Center",
                  address: "789 Valencia St, SF, CA 94110",
                  distance: "2.1 mi",
                  type: "Tutoring",
                  features: ["K-12 Tutoring", "Test Prep", "Homework Help"],
                  hours: "7 days 10AM-8PM",
                  rating: "4.8",
                },
              ].map((hub, i) => (
                <Card
                  key={i}
                  className="hover:shadow-lg transition-all hover:border-blue-300 dark:hover:border-blue-700"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center shrink-0 border-2 border-blue-200 dark:border-blue-800">
                        <Building2Icon />
                      </div>

                      <div className="flex-1 space-y-3">
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-1">
                            <h3 className="font-bold text-lg">{hub.name}</h3>
                            <div className="flex items-center gap-1 text-sm font-semibold whitespace-nowrap">
                              <StarIcon />
                              {hub.rating}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <MapPinIcon />
                            <span>{hub.address}</span>
                            <Badge variant="secondary" className="ml-2">
                              {hub.distance}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="font-semibold">
                            {hub.type}
                          </Badge>
                          {hub.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs text-muted-foreground">
                            <ClockIcon />
                            {hub.hours}
                          </span>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <MapPinIcon />
                              Directions
                            </Button>
                            <Button size="sm">
                              View Details
                              <ChevronRightIcon />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/learninghubs">
                <GlobeIcon />
                Explore All 5,000+ LearningHubs
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
