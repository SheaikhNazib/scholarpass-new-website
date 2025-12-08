import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2Icon, ShieldIcon, HeartIcon } from "@/components/icons";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
            Building Trust Through Transparency
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            We&apos;re just getting started and committed to being honest about our growth
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl">Our Commitment to You</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                ScholarPASS is a growing platform connecting learners with scholarships, tutoring, career training,
                and educational opportunities worldwide.
              </p>
              <p className="text-muted-foreground">
                We believe in transparency and building trust. As we grow, we&apos;ll share real metrics and authentic
                testimonials from our community.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <CheckCircle2Icon />
                  100% Transparent
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <ShieldIcon />
                  Verified Partners
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  <HeartIcon />
                  Student-First
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
