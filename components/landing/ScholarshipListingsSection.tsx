import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCapIcon, ClockIcon, UsersIcon, ZapIcon } from "@/components/icons"

export default function ScholarshipListingsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <GraduationCapIcon />
          <span className="font-semibold">Scholarship Marketplace</span>
          <span className="text-muted-foreground">→ Browse AI-matched opportunities</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-2">Trending Scholarships</h2>
            <p className="text-muted-foreground">AI-matched opportunities near San Francisco, CA</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/scholarships">View All →</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "STEM Excellence Scholarship",
              sponsor: "Tech Foundation",
              amount: "$5,000",
              match: "92%",
              deadline: "Apr 30, 2025",
              applicants: "234",
            },
            {
              title: "First-Generation College Fund",
              sponsor: "Education Trust",
              amount: "$10,000",
              match: "88%",
              deadline: "May 15, 2025",
              applicants: "567",
            },
            {
              title: "Women in Tech Scholarship",
              sponsor: "Global Tech Initiative",
              amount: "$7,500",
              match: "95%",
              deadline: "Jun 1, 2025",
              applicants: "189",
            },
          ].map((scholarship, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  >
                    {scholarship.match} Match
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{scholarship.amount}</div>
                  </div>
                </div>
                <CardTitle className="text-lg">{scholarship.title}</CardTitle>
                <CardDescription>by {scholarship.sponsor}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <ClockIcon />
                    <span>{scholarship.deadline}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UsersIcon />
                    <span>{scholarship.applicants} applied</span>
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href={`/scholarships/${i}`}>
                    <ZapIcon />
                    Auto-Apply Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
