import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2Icon } from "@/components/icons";

export default function InstitutesDirectorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Building2Icon />
          <span className="font-semibold">Institutes Marketplace</span>
          <span className="text-muted-foreground">→ Schools, colleges & training centers</span>
        </div>

        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <Building2Icon />
            Institutes Marketplace
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
            Discover Schools, Colleges & Training Centers
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Browse courses, scholarships, and programs from verified educational institutions worldwide
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Stanford Online", courses: "156", scholarships: "23", type: "University" },
            { name: "Code Academy Pro", courses: "89", scholarships: "12", type: "Bootcamp" },
            { name: "IIT Delhi Programs", courses: "67", scholarships: "34", type: "University" },
            { name: "Khan Academy", courses: "234", scholarships: "8", type: "K-12" },
          ].map((institute, i) => (
            <Card key={i} className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-3">
                  <Building2Icon />
                </div>
                <CardTitle className="text-lg">{institute.name}</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {institute.type}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Courses</span>
                    <span className="font-semibold">{institute.courses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Scholarships</span>
                    <span className="font-semibold">{institute.scholarships}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href={`/institutes/${i}`}>View Profile →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" asChild>
            <Link href="/institutes">Browse All Institutes →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
