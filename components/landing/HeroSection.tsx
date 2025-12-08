import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SparklesIcon } from "@/components/icons"

export default function HeroSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content - Centered */}
          <div className="text-center lg:text-left space-y-10">
            <div className="space-y-6">
              <h1 className="font-bold tracking-tight">
                <div className="text-6xl md:text-7xl lg:text-8xl mb-4 leading-none">
                  <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                    Scholar
                  </span>
                  <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-purple-500/50 transition-all px-10 py-7 text-lg group"
                asChild
              >
                <Link href="/scholarpass-plus">
                  <span className="group-hover:rotate-12 transition-transform">
                    <SparklesIcon />
                  </span>
                  Signup Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image - Modern glassmorphism card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-[2rem] blur-3xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300 to-purple-400 rounded-[2.5rem] blur-2xl opacity-20"></div>

              <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-[2rem] shadow-2xl border border-white/50">
                <img
                  src="/diverse-students-collaborating-on-digital-devices-.jpg"
                  alt="Students learning with AI technology"
                  className="relative rounded-[1.5rem] shadow-xl w-full h-auto"
                />

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl">
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
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 border-2 border-yellow-200 hover:border-yellow-400">
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
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-orange-50 via-white to-orange-50 border-2 border-orange-200 hover:border-orange-400">
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
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-purple-50 via-white to-purple-50 border-2 border-purple-200 hover:border-purple-400">
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
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-blue-50 via-white to-blue-50 border-2 border-blue-200 hover:border-blue-400">
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
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-orange-50 via-white to-orange-50 border-2 border-orange-200 hover:border-orange-400">
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
  )
}
