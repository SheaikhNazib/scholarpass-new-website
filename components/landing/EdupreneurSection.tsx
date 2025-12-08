import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RocketIcon, Building2Icon, DollarSignIcon } from "@/components/icons";

export default function EdupreneurSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-950/10 dark:to-pink-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
          <RocketIcon />
          <span className="font-semibold">Edupreneur Program</span>
          <span className="text-muted-foreground">→ Become a LearningHub partner</span>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            <RocketIcon />
            Edupreneur Program
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
            Become a LearningHub Partner
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Open a STEM Lab, run tutoring programs, or host bootcamps in your community. Earn revenue while creating
            local education impact.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mb-10">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mx-auto mb-3">
                <Building2Icon />
              </div>
              <h3 className="font-semibold mb-2">Open LearningHub</h3>
              <p className="text-sm text-muted-foreground">Physical center for courses & tutoring</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mx-auto mb-3">
                <RocketIcon />
              </div>
              <h3 className="font-semibold mb-2">Launch STEM Lab</h3>
              <p className="text-sm text-muted-foreground">Robotics, coding & maker space</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-3">
                <DollarSignIcon />
              </div>
              <h3 className="font-semibold mb-2">Earn Revenue</h3>
              <p className="text-sm text-muted-foreground">Share in course & device sales</p>
            </div>
          </div>

          <Button size="lg" asChild>
            <Link href="/edupreneur">Learn About Edupreneur →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
