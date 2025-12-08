import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LaptopIcon, CheckCircle2Icon } from "@/components/icons";

export default function LearningDevicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <LaptopIcon />
          <span className="font-semibold">Learning Devices Store</span>
          <span className="text-muted-foreground">→ Student laptops, tablets & STEM kits</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
              Student Laptops, Tablets & STEM Kits
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Pre-configured devices optimized for learning. Pay with SP Wallet credits or apply for device
              sponsorship through corporate CSR programs.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2Icon />
                <span>Student laptops from $299</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2Icon />
                <span>Educational software pre-installed</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2Icon />
                <span>Robotics & coding kits available</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2Icon />
                <span>Device sponsorship through LaunchPad</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/devices">Shop Devices</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/devices/sponsorship">Apply for Sponsorship</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <CardHeader className="text-center pb-2">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-3 flex items-center justify-center">
                  <div className="text-7xl">💻</div>
                </div>
                <CardTitle className="text-lg">Student Laptop</CardTitle>
                <CardDescription className="text-xs">Intel i5, 8GB RAM, 256GB SSD</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-3">$499</div>
                <Button size="sm" className="w-full bg-transparent" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <CardHeader className="text-center pb-2">
                <div className="aspect-square bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg mb-3 flex items-center justify-center">
                  <div className="text-7xl">📱</div>
                </div>
                <CardTitle className="text-lg">Learning Tablet</CardTitle>
                <CardDescription className="text-xs">10.5&quot; HD Display, 64GB Storage</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-3">$299</div>
                <Button size="sm" className="w-full bg-transparent" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <CardHeader className="text-center pb-2">
                <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg mb-3 flex items-center justify-center">
                  <div className="text-7xl">🤖</div>
                </div>
                <CardTitle className="text-lg">Robotics Kit</CardTitle>
                <CardDescription className="text-xs">Arduino-based, 40+ projects</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-3">$149</div>
                <Button size="sm" className="w-full bg-transparent" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <CardHeader className="text-center pb-2">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-lg mb-3 flex items-center justify-center">
                  <div className="text-7xl">🔬</div>
                </div>
                <CardTitle className="text-lg">STEM Lab Kit</CardTitle>
                <CardDescription className="text-xs">Chemistry, Physics & Biology</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-3">$199</div>
                <Button size="sm" className="w-full bg-transparent" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
