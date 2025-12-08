import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SparklesIcon, BotIcon, ZapIcon, AwardIcon, TargetIcon } from "@/components/icons"

export default function ScholarPassPlusSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <SparklesIcon />
          <span className="font-semibold">ScholarPASS Plus Subscription</span>
          <span className="text-muted-foreground">→ Premium AI-powered features</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <Badge className="mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-6 py-2 text-sm">
              <SparklesIcon />
              Premium Subscription
            </Badge>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ScholarPASS Plus
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Unlock AI-powered scholarship matching, auto-apply technology, SP Wallet credits, and personalized
              admissions guidance. Your complete education funding solution.
            </p>

            <div className="grid gap-6">
              {[
                {
                  icon: <BotIcon />,
                  title: "AI Scholarship Agent",
                  desc: "Instant matching with 10,000+ scholarships",
                  gradient: "from-blue-100 to-blue-200",
                },
                {
                  icon: <ZapIcon />,
                  title: "Special Course Fee for ScholarPASS Plus members",
                  desc: "Enroll 1,000 of courses with scholarPASS special Rate",
                  gradient: "from-purple-100 to-purple-200",
                },
                {
                  icon: <AwardIcon />,
                  title: "$120 SP Wallet Credits",
                  desc: "Get $120 instant credit to spend across the platform",
                  gradient: "from-green-100 to-emerald-200",
                },
                {
                  icon: <TargetIcon />,
                  title: "College Admission Guide",
                  desc: "AI-powered college & program selection",
                  gradient: "from-orange-100 to-orange-200",
                },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 group hover:translate-x-2 transition-transform">
                  <div
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">{feature.title}</div>
                    <div className="text-sm text-gray-600">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl px-10 py-7 text-lg"
              asChild
            >
              <Link href="/scholarpass-plus">Signup Now</Link>
            </Button>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] blur-3xl opacity-25 group-hover:opacity-35 transition-opacity"></div>

            <div className="relative bg-white/60 backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border-2 border-white/50">
              <img
                src="/student-using-laptop-with-scholarship-dashboard--m.jpg"
                alt="ScholarPASS Plus Dashboard"
                className="relative rounded-[1.5rem] shadow-xl w-full h-auto"
              />

              <div className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white/50">
                <div className="text-sm text-gray-600 mb-2 font-medium">Annual Plan Only</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  $120<span className="text-2xl text-gray-500">/year</span>
                </div>
                <div className="text-sm font-bold text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                  + $120 SP Wallet Credit
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-xl shadow-2xl">
                <div className="text-xs font-medium opacity-90">Exclusive Access</div>
                <div className="text-lg font-bold">1,000+ Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
