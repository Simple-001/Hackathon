import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/countdown-timer"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <Badge className="mb-4 px-3 py-1 text-sm bg-white/10 text-white backdrop-blur-sm border-none">
              April 8, 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Frontend Fantasia{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
                Hackathon
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              A design-centric hackathon focused on UI/UX and front-end development. Build stunning web apps in 7 hours!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white border-none"
              >
                <Link href="/register">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Event Countdown</h2>
            <p className="text-white/70">Mark your calendars and get ready!</p>
          </div>
          <CountdownTimer targetDate="2025-04-08T09:30:00" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                About the <span className="text-pink-500">Hackathon</span>
              </h2>
              <p className="text-white/70 mb-6">
                Frontend Fantasia is a design-centric hackathon that challenges participants to create interactive,
                responsive web designs. Organized by Continental Institute of International Studies, this event brings
                together creative minds passionate about UI/UX and front-end development.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-pink-500/20 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">April 8, 2025</h3>
                    <p className="text-white/70">Mark your calendar</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-indigo-500/20 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">7 Hours (09:30 AM – 04:30 PM)</h3>
                    <p className="text-white/70">Intense coding session</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-orange-500/20 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Continental Institute of International Studies</h3>
                    <p className="text-white/70">Block B, Room No. 201</p>
                  </div>
                </li>
              </ul>
              <Button
                asChild
                className="mt-8 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white border-none"
              >
                <Link href="/event-details">
                  View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-700 p-1">
                <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center">
                  <img
                    src="https://www.ciis.ac.in/wp-content/uploads/ciis.jpg"
                    alt="Hackathon participants coding"
                    className="rounded-lg object-cover w-full h-full opacity-80 mix-blend-lighten"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about" className="group">
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-800/50 transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold text-white mb-2">About</h3>
                <p className="text-white/70 mb-4">Learn more about the hackathon objectives and why it matters.</p>
                <span className="text-pink-500 flex items-center text-sm group-hover:translate-x-1 transition-transform duration-300">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
            <Link href="/event-details" className="group">
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-800/50 transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold text-white mb-2">Event Details</h3>
                <p className="text-white/70 mb-4">Check out the schedule, venue, and other important information.</p>
                <span className="text-pink-500 flex items-center text-sm group-hover:translate-x-1 transition-transform duration-300">
                  View details <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
            <Link href="/judging" className="group">
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-800/50 transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold text-white mb-2">Judging Criteria</h3>
                <p className="text-white/70 mb-4">
                  Understand how projects will be evaluated and what judges look for.
                </p>
                <span className="text-pink-500 flex items-center text-sm group-hover:translate-x-1 transition-transform duration-300">
                  See criteria <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
            <Link href="/sponsors" className="group">
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-800/50 transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold text-white mb-2">Sponsorship</h3>
                <p className="text-white/70 mb-4">Discover sponsorship opportunities and benefits for your brand.</p>
                <span className="text-pink-500 flex items-center text-sm group-hover:translate-x-1 transition-transform duration-300">
                  Partner with us <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Showcase Your Front-end Skills?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join us for an exciting day of coding, creativity, and competition. Registration is free and open to teams
            of 2-4 members.
          </p>
          <Button asChild size="lg" className="bg-white text-indigo-900 hover:bg-white/90">
            <Link href="/register">Register Your Team Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

