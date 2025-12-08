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
import { BriefcaseIcon, ClockIcon, AwardIcon } from "@/components/icons";

export default function CareerBootcampsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <BriefcaseIcon />
          <span className="font-semibold">Career Bootcamps</span>
          <span className="text-muted-foreground">→ Job-ready tech training with certifications</span>
        </div>

        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <BriefcaseIcon />
            Career Bootcamps
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
            Job-Ready Tech Training with Dual Certifications
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Master AI, Data Science, Cybersecurity, Cloud Computing, and more with certifications from MIT, Harvard,
            and IIT
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI & Machine Learning",
              duration: "16 weeks",
              level: "Intermediate",
              cert: "MIT Professional",
              price: "$4,999",
              scholarships: true,
            },
            {
              title: "Data Science Bootcamp",
              duration: "20 weeks",
              level: "Beginner",
              cert: "Harvard Online",
              price: "$5,499",
              scholarships: true,
            },
            {
              title: "Cybersecurity Professional",
              duration: "18 weeks",
              level: "Advanced",
              cert: "IIT Certificate",
              price: "$5,999",
              scholarships: true,
            },
            {
              title: "Cloud Computing (AWS)",
              duration: "14 weeks",
              level: "Intermediate",
              cert: "AWS + MIT",
              price: "$4,499",
              scholarships: false,
            },
            {
              title: "Full-Stack Development",
              duration: "22 weeks",
              level: "Beginner",
              cert: "MITx Certificate",
              price: "$6,499",
              scholarships: true,
            },
            {
              title: "Robotics & IoT",
              duration: "16 weeks",
              level: "Intermediate",
              cert: "IIT + Stanford",
              price: "$5,499",
              scholarships: true,
            },
          ].map((bootcamp, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                {bootcamp.scholarships && (
                  <Badge className="w-fit mb-2 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                    <AwardIcon />
                    Scholarships Available
                  </Badge>
                )}
                <CardTitle>{bootcamp.title}</CardTitle>
                <CardDescription>{bootcamp.cert}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <ClockIcon />
                    <span>{bootcamp.duration}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {bootcamp.level}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-primary mb-4">{bootcamp.price}</div>
                <Button className="w-full" asChild>
                  <Link href={`/bootcamps/${i}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <Link href="/career-bootcamps">View All Bootcamps →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
