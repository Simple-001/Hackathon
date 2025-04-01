import Link from "next/link"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EventDetailsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Event Details</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about the Frontend Fantasia Hackathon.
          </p>
        </div>
      </section>

      {/* Key Details Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Key <span className="text-pink-500">Information</span>
              </h2>
              <p className="text-white/70 mb-8">
                Mark your calendar for the Frontend Fantasia Hackathon, a one-day event where you'll have 7 hours to
                create an impressive web application or website.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-pink-500/20 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Date</h3>
                    <p className="text-white/70">April 8, 2025</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-indigo-500/20 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Time</h3>
                    <p className="text-white/70">09:30 AM – 04:30 PM (7 hours)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-orange-500/20 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Venue</h3>
                    <p className="text-white/70">Continental Institute for International Studies</p>
                    <p className="text-white/50 text-sm">Exact location details to be announced</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-purple-500/20 p-2 rounded-full">
                    <Users className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Participation</h3>
                    <p className="text-white/70">Teams of 2-4 members</p>
                    <p className="text-white/50 text-sm">Expected: 20-30 teams</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-700 p-1">
                <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center">
                  <img
                    src="https://www.ciis.ac.in/wp-content/uploads/ciis.jpg"
                    alt="Hackathon venue"
                    className="rounded-lg object-cover w-full h-full opacity-80 mix-blend-lighten"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-zinc-900 p-4 rounded-xl border border-zinc-800 shadow-xl">
                <div className="text-center">
                  <p className="text-white/70 text-sm">Registration Fee</p>
                  <p className="text-3xl font-bold text-white">FREE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Event <span className="text-pink-500">Schedule</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">A detailed breakdown of the day's activities.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:translate-x-[-0.5px]"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Item 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-4 md:pb-0 order-2 md:order-1">
                    <h3 className="text-xl font-semibold text-white">Registration & Welcome</h3>
                    <p className="text-white/70 mt-1">Check-in, team setup, and welcome address</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-8 h-8 rounded-full bg-pink-500 border-4 border-zinc-900 z-10 flex items-center justify-center order-1 md:order-2">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <span className="text-white/50">09:30 AM - 10:00 AM</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-4 md:pb-0 order-2 md:order-1">
                    <h3 className="text-xl font-semibold text-white">Keynote Speech</h3>
                    <p className="text-white/70 mt-1">Industry expert presentation on UI/UX trends</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-8 h-8 rounded-full bg-indigo-500 border-4 border-zinc-900 z-10 flex items-center justify-center order-1 md:order-2">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <span className="text-white/50">10:00 AM - 10:30 AM</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-4 md:pb-0 order-2 md:order-1">
                    <h3 className="text-xl font-semibold text-white">Hackathon Begins</h3>
                    <p className="text-white/70 mt-1">Teams start working on their projects</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-8 h-8 rounded-full bg-orange-500 border-4 border-zinc-900 z-10 flex items-center justify-center order-1 md:order-2">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <span className="text-white/50">10:30 AM - 03:30 PM</span>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-4 md:pb-0 order-2 md:order-1">
                    <h3 className="text-xl font-semibold text-white">Lunch Break</h3>
                    <p className="text-white/70 mt-1">Refreshments provided (coding continues)</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-8 h-8 rounded-full bg-purple-500 border-4 border-zinc-900 z-10 flex items-center justify-center order-1 md:order-2">
                    <span className="text-xs font-bold text-white">4</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <span className="text-white/50">12:30 PM - 01:30 PM</span>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-4 md:pb-0 order-2 md:order-1">
                    <h3 className="text-xl font-semibold text-white">Project Submission</h3>
                    <p className="text-white/70 mt-1">Teams finalize and submit their projects</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-8 h-8 rounded-full bg-pink-500 border-4 border-zinc-900 z-10 flex items-center justify-center order-1 md:order-2">
                    <span className="text-xs font-bold text-white">5</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <span className="text-white/50">03:30 PM - 03:45 PM</span>
                  </div>
                </div>

                {/* Item 6 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-4 md:pb-0 order-2 md:order-1">
                    <h3 className="text-xl font-semibold text-white">Judging & Presentations</h3>
                    <p className="text-white/70 mt-1">Teams present their projects to judges</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-8 h-8 rounded-full bg-indigo-500 border-4 border-zinc-900 z-10 flex items-center justify-center order-1 md:order-2">
                    <span className="text-xs font-bold text-white">6</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <span className="text-white/50">03:45 PM - 04:15 PM</span>
                  </div>
                </div>

                {/* Item 7 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1">
                    <h3 className="text-xl font-semibold text-white">Awards Ceremony</h3>
                    <p className="text-white/70 mt-1">Announcement of winners and prizes</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-8 h-8 rounded-full bg-orange-500 border-4 border-zinc-900 z-10 flex items-center justify-center order-1 md:order-2">
                    <span className="text-xs font-bold text-white">7</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <span className="text-white/50">04:15 PM - 04:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400 p-1">
                  <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center">
                    <img
                      src="https://th.bing.com/th/id/OIP.xNpW4Pj7GmUM3H5VzexjvgHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt="Hackathon preparation"
                      className="rounded-lg object-cover w-full h-full opacity-80 mix-blend-lighten"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-white">
                What to <span className="text-pink-500">Bring</span>
              </h2>
              <p className="text-white/70 mb-8">Be prepared for the hackathon by bringing these essential items:</p>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <p className="text-white/70">
                    <span className="text-white font-medium">Laptop & Charger:</span> Essential for coding and designing
                  </p>
                </li>
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <p className="text-white/70">
                    <span className="text-white font-medium">Student ID:</span> Required for registration verification
                  </p>
                </li>
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <p className="text-white/70">
                    <span className="text-white font-medium">Notebook & Pen:</span> For brainstorming and planning
                  </p>
                </li>
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">4</span>
                  </div>
                  <p className="text-white/70">
                    <span className="text-white font-medium">Water Bottle:</span> Stay hydrated during the event
                  </p>
                </li>
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">5</span>
                  </div>
                  <p className="text-white/70">
                    <span className="text-white font-medium">Enthusiasm & Creativity:</span> The most important things
                    to bring!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Participate?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Register your team today and be part of this exciting hackathon experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-900 hover:bg-white/90">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/judging">View Judging Criteria</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

