import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  GraduationCap as GraduationCapIcon,
  BookOpen as BookOpenIcon,
  Briefcase as BriefcaseIcon,
  Building2 as Building2Icon,
  Sparkles as SparklesIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Award as AwardIcon,
  Rocket as RocketIcon,
  Heart as HeartIcon,
  MapPin as MapPinIcon,
  Star as StarIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Laptop as LaptopIcon,
  Bot as BotIcon,
  Zap as ZapIcon,
  Target as TargetIcon,
  CheckCircle2 as CheckCircle2Icon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO - Mind-blowing design with floating elements */}
      <section className="relative py-32 bg-linear-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-linear-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-linear-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content - Centered */}
            <div className="text-center lg:text-left space-y-10">
              <div className="space-y-6">
                <h1 className="font-bold tracking-tight">
                  <div className="text-6xl md:text-7xl lg:text-8xl mb-4 leading-none">
                    <span className="bg-linear-to-r from-cyan-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                      Scholar
                    </span>
                    <span className="bg-linear-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      PASS
                    </span>
                  </div>
                  <div className="text-5xl md:text-6xl lg:text-7xl text-gray-900">Scholarships</div>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  AI Agents & Live Counselors connect you to K-12 tutoring, career bootcamps, higher education
                  institutes, STEM & Robotics Labs, and top educators worldwide
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-5">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-purple-500/50 transition-all px-10 py-7 text-lg group"
                  asChild
                >
                  <Link href="/scholarpass-plus">
                    <SparklesIcon className="group-hover:rotate-12 transition-transform" />
                    Signup Now
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Image - Modern glassmorphism card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="absolute inset-0 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-4xl blur-3xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute -inset-4 bg-linear-to-r from-cyan-300 to-purple-400 rounded-[2.5rem] blur-2xl opacity-20"></div>

                <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-4xl shadow-2xl border border-white/50">
                  <img
                    src="/diverse-students-collaborating-on-digital-devices-.jpg"
                    alt="Students learning with AI technology"
                    className="relative rounded-3xl shadow-xl w-full h-auto"
                  />

                  <div className="absolute -bottom-6 -left-6 bg-linear-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl">
                    <div className="text-sm font-medium">AI-Powered Search &amp; Match</div>
                    <div className="text-2xl font-bold">1,000+ Scholarships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Service Cards */}
          <div className="mt-32">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              ScholarPASS, Simplified Platform for LifeLong Education at Global Scale
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <Link href="/scholarpass-plus" className="group">
                <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 bg-linear-to-br from-yellow-50 via-white to-yellow-50 border-2 border-yellow-200 hover:border-yellow-400">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform">📚</div>
                    <h4 className="text-xl font-bold text-gray-900">AI Scholarship Matching & College Admissions</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      AI-powered matching with 1,000+ scholarships and personalized college guidance
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/tutoring" className="group">
                <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 bg-linear-to-br from-orange-50 via-white to-orange-50 border-2 border-orange-200 hover:border-orange-400">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform">🎓</div>
                    <h4 className="text-xl font-bold text-gray-900">K-12 Unlimited Tutoring with AI & Live Tutors</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      24/7 AI homework help plus live expert tutors in 100+ subjects
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/career-bootcamps" className="group">
                <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 bg-linear-to-br from-purple-50 via-white to-purple-50 border-2 border-purple-200 hover:border-purple-400">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform">⚡</div>
                    <h4 className="text-xl font-bold text-gray-900">Career Bootcamps from Top Institutes</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      MIT, Harvard & IIT certifications with job placement support
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/devices" className="group">
                <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 bg-linear-to-br from-blue-50 via-white to-blue-50 border-2 border-blue-200 hover:border-blue-400">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform">💻</div>
                    <h4 className="text-xl font-bold text-gray-900">STEM Labs, Learning Devices & Robotics Kits</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Student laptops, tablets, and robotics kits with sponsorship programs
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/launchpad" className="group">
                <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 bg-linear-to-br from-orange-50 via-white to-orange-50 border-2 border-orange-200 hover:border-orange-400">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform">❤️</div>
                    <h4 className="text-xl font-bold text-gray-900">Scholarship LaunchPad for Sponsors</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      CSR and philanthropy programs with 97% pass-through efficiency
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCHOLARPASS PLUS - Redesigned with different image and glassmorphism */}
      <section className="py-32 bg-linear-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <SparklesIcon />
            <span className="font-semibold">ScholarPASS Plus Subscription</span>
            <span className="text-muted-foreground">→ Premium AI-powered features</span>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <Badge className="mb-2 bg-linear-to-r from-blue-500 to-purple-500 text-white border-0 px-6 py-2 text-sm">
                <SparklesIcon />
                Premium Subscription
              </Badge>

              <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                      className={`h-14 w-14 rounded-2xl bg-linear-to-br ${feature.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}
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
                className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl px-10 py-7 text-lg"
                asChild
              >
                <Link href="/scholarpass-plus">Signup Now</Link>
              </Button>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-4xl blur-3xl opacity-25 group-hover:opacity-35 transition-opacity"></div>

              <div className="relative bg-white/60 backdrop-blur-xl p-4 rounded-4xl shadow-2xl border-2 border-white/50">
                <img
                  src="/student-using-laptop-with-scholarship-dashboard--m.jpg"
                  alt="ScholarPASS Plus Dashboard"
                  className="relative rounded-3xl shadow-xl w-full h-auto"
                />

                <div className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white/50">
                  <div className="text-sm text-gray-600 mb-2 font-medium">Annual Plan Only</div>
                  <div className="text-5xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                    $120<span className="text-2xl text-gray-500">/year</span>
                  </div>
                  <div className="text-sm font-bold text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                    + $120 SP Wallet Credit
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-linear-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-xl shadow-2xl">
                  <div className="text-xs font-medium opacity-90">Exclusive Access</div>
                  <div className="text-lg font-bold">1,000+ Courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCHOLARSHIP LISTINGS */}
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

      {/* 4. K-12 TUTORING */}
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
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" size="lg" asChild>
              <Link href="/k12-tutoring">
                <BookOpenIcon className="mr-2 h-4 w-4" />
                View All K-12 Programs
              </Link>
            </Button>
          </div>
          {/* </CHANGE> */}
        </div>
      </section>

      {/* 5. CAREER BOOTCAMPS */}
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
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" asChild>
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

      {/* 6. INSTITUTES DIRECTORY */}
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
                  <div className="h-16 w-16 rounded-lg bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-3">
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
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" size="lg" asChild>
              <Link href="/institutes">Browse All Institutes →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. LEARNING DEVICES - Improved design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <LaptopIcon />
            <span className="font-semibold">Learning Devices Store</span>
            <span className="text-muted-foreground">→ Student laptops, tablets & STEM kits</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">
                <LaptopIcon />
                Learning Devices
              </Badge>
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
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" size="lg" asChild>
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
                  <div className="aspect-square bg-linear-to-br from-blue-50 to-blue-100 rounded-lg mb-3 flex items-center justify-center">
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
                  <div className="aspect-square bg-linear-to-br from-purple-50 to-purple-100 rounded-lg mb-3 flex items-center justify-center">
                    <div className="text-7xl">📱</div>
                  </div>
                  <CardTitle className="text-lg">Learning Tablet</CardTitle>
                  <CardDescription className="text-xs">10.5" HD Display, 64GB Storage</CardDescription>
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
                  <div className="aspect-square bg-linear-to-br from-orange-50 to-orange-100 rounded-lg mb-3 flex items-center justify-center">
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
                  <div className="aspect-square bg-linear-to-br from-green-50 to-green-100 rounded-lg mb-3 flex items-center justify-center">
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

      {/* 8. EDUpreneur */}
      <section className="py-20 bg-linear-to-r from-orange-50 to-pink-50 dark:from-orange-950/10 dark:to-pink-950/10">
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

            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" size="lg" asChild>
              <Link href="/edupreneur">Learn About Edupreneur →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 9. SCHOLARPASS LAUNCHPAD (SPONSORS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <HeartIcon />
            <span className="font-semibold">ScholarPASS LaunchPad</span>
            <span className="text-muted-foreground">→ Sponsor education & create impact</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-linear-to-r from-yellow-400 to-orange-400 text-white border-0">
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
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" size="lg" asChild>
                  <Link href="/launchpad">Explore LaunchPad</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/launchpad/sp1000">Join SP1000 Network</Link>
                </Button>
              </div>
            </div>

            <Card className="bg-linear-to-br from-yellow-50 to-orange-50 border-2">
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
                    <div className="h-full w-3/4 bg-linear-to-r from-yellow-500 to-orange-500" />
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

      {/* 10. LEARNINGHUB NETWORK - Enhanced with better selector */}
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

              <Button size="lg" className="w-full md:w-auto px-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 ">
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
                        <div className="h-20 w-20 rounded-xl bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center shrink-0 border-2 border-blue-200 dark:border-blue-800">
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
                              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" size="sm">
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

      {/* 11. GLOBAL IMPACT METRICS - Removed since we're just starting */}

      {/* 12. TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
              Building Trust Through Transparency
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              We're just getting started and committed to being honest about our growth
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
                  We believe in transparency and building trust. As we grow, we'll share real metrics and authentic
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

      {/* 13. FINAL CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8">
              Start accessing scholarships, tutoring, and career opportunities through ScholarPASS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" size="lg" asChild>
                <Link href="/get-started">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/scholarpass-plus">
                  <SparklesIcon />
                  Join ScholarPASS Plus - $120/year
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">Get $120 SP Wallet Credit instantly when you join</p>
          </div>
        </div>
      </section>
    </div>
  )
}
