import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeartIcon, TargetIcon, TrendingUpIcon, ShieldIcon } from "@/components/icons";

export default function ScholarPassLaunchpadSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <HeartIcon />
          <span className="font-semibold">ScholarPASS LaunchPad</span>
          <span className="text-muted-foreground">→ Sponsor education & create impact</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">
              <HeartIcon />
              ScholarPASS LaunchPad
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
              Create Impact Through Education Funding
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Launch CSR and philanthropic scholarship programs with 97% pass-through efficiency. Track real-time
              impact and connect directly with learners.
            </p>

            <div className="grid gap-4 mb-8">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                  <TargetIcon />
                </div>
                <div>
                  <div className="font-semibold">Targeted Campaigns</div>
                  <div className="text-sm text-muted-foreground">
                    Support specific demographics, regions, or fields
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                  <TrendingUpIcon />
                </div>
                <div>
                  <div className="font-semibold">Real-Time Impact</div>
                  <div className="text-sm text-muted-foreground">Dashboard showing learner progress & outcomes</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                  <ShieldIcon />
                </div>
                <div>
                  <div className="font-semibold">97% Efficiency</div>
                  <div className="text-sm text-muted-foreground">More funding reaches learners, not overhead</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/launchpad">Explore LaunchPad</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/launchpad/sp1000">Join SP1000 Network</Link>
              </Button>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2">
            <CardHeader>
              <CardTitle>Sponsor Impact Dashboard</CardTitle>
              <CardDescription>Real-time scholarship program metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Total Funded</span>
                  <span className="font-bold text-2xl">$127,500</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-yellow-500 to-orange-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">43</div>
                  <div className="text-xs text-muted-foreground">Students Supported</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-xs text-muted-foreground">Completion Rate</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold mb-2">Top Categories</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>STEM Programs</span>
                    <span className="font-semibold">$54K</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Bootcamps</span>
                    <span className="font-semibold">$38K</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>K-12 Tutoring</span>
                    <span className="font-semibold">$35.5K</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
