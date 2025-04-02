import Link from "next/link"
import { ArrowRight, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JudgingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Judging Criteria & Theme</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Learn how your project will be evaluated and what the judges are looking for.
          </p>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Hackathon <span className="text-pink-500">Theme</span>
              </h2>
              <p className="text-white/70 mb-8">
                The Frontend Fusion Hackathon features an open theme, allowing participants to explore their creativity
                and build projects that showcase their UI/UX and front-end development skills.
              </p>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Open Theme</h3>
                <p className="text-white/70">
                  You're free to build any type of web application or website that demonstrates your front-end skills.
                  This could include:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                    <span className="text-white/70">E-commerce platforms</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                    <span className="text-white/70">Social media applications</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                    <span className="text-white/70">Educational tools</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                    <span className="text-white/70">Portfolio websites</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                    <span className="text-white/70">Interactive dashboards</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                    <span className="text-white/70">Any other web-based application</span>
                  </li>
                </ul>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white border-none"
              >
                <Link href="/register">
                  Register Your Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-700 p-1">
                <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center">
                  <img
                    src="https://th.bing.com/th/id/OIP.NwswPhRg0mkdNT7Cj2EzlgHaIy?w=155&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Creative web design"
                    className="rounded-lg object-cover w-full h-full opacity-80 mix-blend-lighten"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-zinc-900 p-4 rounded-xl border border-zinc-800 shadow-xl">
                <div className="text-center">
                  <p className="text-white/70 text-sm">Focus On</p>
                  <p className="text-xl font-bold text-white">Creativity & Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Judging Criteria Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Judging <span className="text-pink-500">Criteria</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Projects will be evaluated based on the following criteria, with each category worth 25 points for a total
              of 100 points.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design & Aesthetics</h3>
              <p className="text-white/70 mb-4">
                Visual appeal, color scheme, typography, and overall design consistency.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">25 Points</span>
                <span className="text-xs text-white/50">25%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-1.5 mt-2">
                <div className="bg-pink-500 h-1.5 rounded-full" style={{ width: "25%" }}></div>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">User Experience</h3>
              <p className="text-white/70 mb-4">
                Intuitive navigation, accessibility, responsiveness, and overall usability.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">25 Points</span>
                <span className="text-xs text-white/50">25%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-1.5 mt-2">
                <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: "25%" }}></div>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Technical Implementation</h3>
              <p className="text-white/70 mb-4">
                Code quality, performance optimization, and appropriate use of technologies.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">25 Points</span>
                <span className="text-xs text-white/50">25%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-1.5 mt-2">
                <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: "25%" }}></div>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation & Creativity</h3>
              <p className="text-white/70 mb-4">
                Originality of the idea, creative problem-solving, and unique features.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">25 Points</span>
                <span className="text-xs text-white/50">25%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-1.5 mt-2">
                <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: "25%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Judging Process Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400 p-1">
                  <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center">
                    <img
                      src="https://th.bing.com/th/id/OIP.Mjo9M4fgaFiaW7Qe51uXuAHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt="Judges evaluating projects"
                      className="rounded-lg object-cover w-full h-full opacity-80 mix-blend-lighten"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Judging <span className="text-pink-500">Process</span>
              </h2>
              <p className="text-white/70 mb-8">
                The judging process is designed to be fair and transparent, giving each team an equal opportunity to
                showcase their project.
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Project Submission</h3>
                    <p className="text-white/70">
                      Teams will submit their projects at 3:30 PM on the day of the hackathon.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Presentations</h3>
                    <p className="text-white/70">
                      Each team will have 3 minutes to present their project to the judges, followed by a 2-minute Q&A.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Evaluation</h3>
                    <p className="text-white/70">
                      Judges will score each project based on the criteria outlined above.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">4</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Winners Announcement</h3>
                    <p className="text-white/70">Winners will be announced during the awards ceremony at 4:15 PM.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Prizes Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-pink-500">Prizes</span> & Recognition
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Winners and participants will receive exciting prizes and recognition for their achievements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* First Place */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <div className="w-20 h-20 bg-yellow-500 rotate-45 transform origin-bottom-left"></div>
                <Award className="absolute top-2 right-2 h-5 w-5 text-zinc-900" />
              </div>
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-yellow-500">1st</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">First Place</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-white/70">Cash Price of Rs. 2000</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-white/70">Winner Certificate</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-white/70">Special Mention on Social Media</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-white/70">Feature on our website</span>
                </li>
              </ul>
            </div>

            {/* Second Place */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <div className="w-20 h-20 bg-gray-400 rotate-45 transform origin-bottom-left"></div>
                <Award className="absolute top-2 right-2 h-5 w-5 text-zinc-900" />
              </div>
              <div className="w-16 h-16 bg-gray-400/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-gray-400">2nd</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Second Place</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-white/70">Cash Price of Rs. 1000</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-white/70">Runner-Up Certificate</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-white/70">Feature on our social media</span>
                </li>
              </ul>
            </div>

            {/* Third Place */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <div className="w-20 h-20 bg-amber-700 rotate-45 transform origin-bottom-left"></div>
                <Award className="absolute top-2 right-2 h-5 w-5 text-zinc-900" />
              </div>
              <div className="w-16 h-16 bg-amber-700/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-amber-700">3rd</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Third Place</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-amber-700 mr-3 flex-shrink-0" />
                  <span className="text-white/70">Cash Price of Rs. 500</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-amber-700 mr-3 flex-shrink-0" />
                  <span className="text-white/70">Second Runner-Up Certificate</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-amber-700 mr-3 flex-shrink-0" />
                  <span className="text-white/70">Recognition at the event</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Participant Perks */}
          <div className="mt-16 max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              🎁 <span className="ml-2">Participant Perks</span>
            </h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-white/70">✅ Participation Certificates</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-white/70">✅ Networking & Learning Opportunities</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-white/70">✅ Exclusive Social Media Recognition</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Showcase Your Skills?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Register your team today and compete for exciting prizes and recognition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-900 hover:bg-white/90">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/sponsors">View Sponsors</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

