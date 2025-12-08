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
import { BookOpenIcon, ClockIcon } from "@/components/icons";

export default function K12TutoringSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 justify-center">
            <BookOpenIcon className="h-5 w-5" />
            <span className="font-semibold">K-12 Learning Bundles</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
            Complete Subject Mastery with Live Tutors & AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive K-12 bundles with certified tutors, AI learning buddy, and 75% ScholarPASS+ scholarship
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Math Excellence Bundle */}
          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
            <CardHeader>
              <Badge className="w-fit mb-3 bg-blue-50 text-blue-700">
                <BookOpenIcon className="mr-1 h-3 w-3" />
                Math Excellence
              </Badge>
              <CardTitle className="text-xl mb-2">Complete Math Mastery Bundle</CardTitle>
              <CardDescription>Algebra, Geometry, Calculus & SAT Math with live tutors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  Algebra
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Geometry
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Calculus
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ClockIcon className="h-4 w-4" />
                12 months
              </div>

              <div className="space-y-2 pt-3 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Regular:</span>
                  <span className="line-through">$1,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">ScholarPASS+:</span>
                  <span className="text-2xl font-bold text-purple-600">$300</span>
                </div>
                <div className="bg-purple-50 rounded p-2 text-center">
                  <span className="text-xs font-medium text-purple-700">✓ 75% Scholarship Applied</span>
                </div>
              </div>

              <div className="flex justify-between text-sm pt-3 border-t">
                <span className="text-muted-foreground">Grade Boost</span>
                <span className="font-semibold text-green-600">+2 grades</span>
              </div>
            </CardContent>
          </Card>

          {/* Science & STEM Bundle */}
          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
            <CardHeader>
              <Badge className="w-fit mb-3 bg-green-50 text-green-700">
                <BookOpenIcon className="mr-1 h-3 w-3" />
                Science & STEM
              </Badge>
              <CardTitle className="text-xl mb-2">Science Explorer Bundle</CardTitle>
              <CardDescription>Physics, Chemistry, Biology with lab sims & coding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  Physics
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Chemistry
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Biology
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ClockIcon className="h-4 w-4" />
                12 months
              </div>

              <div className="space-y-2 pt-3 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Regular:</span>
                  <span className="line-through">$1,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">ScholarPASS+:</span>
                  <span className="text-2xl font-bold text-purple-600">$350</span>
                </div>
                <div className="bg-purple-50 rounded p-2 text-center">
                  <span className="text-xs font-medium text-purple-700">✓ 75% Scholarship Applied</span>
                </div>
              </div>

              <div className="flex justify-between text-sm pt-3 border-t">
                <span className="text-muted-foreground">Grade Boost</span>
                <span className="font-semibold text-green-600">+1.5 grades</span>
              </div>
            </CardContent>
          </Card>

          {/* Test Prep Bundle */}
          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
            <CardHeader>
              <Badge className="w-fit mb-3 bg-orange-50 text-orange-700">
                <BookOpenIcon className="mr-1 h-3 w-3" />
                Test Prep Master
              </Badge>
              <CardTitle className="text-xl mb-2">College Prep Excellence</CardTitle>
              <CardDescription>SAT, ACT, AP prep with college admissions guidance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  SAT
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  ACT
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  AP Exams
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ClockIcon className="h-4 w-4" />8 months
              </div>

              <div className="space-y-2 pt-3 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Regular:</span>
                  <span className="line-through">$1,600</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">ScholarPASS+:</span>
                  <span className="text-2xl font-bold text-purple-600">$400</span>
                </div>
                <div className="bg-purple-50 rounded p-2 text-center">
                  <span className="text-xs font-medium text-purple-700">✓ 75% Scholarship Applied</span>
                </div>
              </div>

              <div className="flex justify-between text-sm pt-3 border-t">
                <span className="text-muted-foreground">Score Increase</span>
                <span className="font-semibold text-green-600">+200 pts</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/k12-tutoring">
              <BookOpenIcon className="mr-2 h-4 w-4" />
              View All K-12 Programs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
