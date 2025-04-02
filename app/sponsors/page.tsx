import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sponsorship & Perks</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Partner with us to support innovation and connect with talented developers.
          </p>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Why <span className="text-pink-500">Sponsor</span> Us?
              </h2>
              <p className="text-white/70 mb-8">
                Sponsoring the Frontend Fantasia Hackathon offers your company a unique opportunity to connect with
                talented developers, showcase your brand, and support innovation in the tech community.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Brand Visibility:</span> Showcase your brand to a targeted
                    audience of tech enthusiasts and future developers.
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Talent Recruitment:</span> Connect with skilled developers
                    for potential internships or job opportunities.
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Product Promotion:</span> Demonstrate your products or
                    services to an engaged audience.
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Community Engagement:</span> Support the tech community and
                    foster innovation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400 p-1">
                  <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center">
                    <img
                      src="https://th.bing.com/th/id/OIP.xl3bJXqTJx8xfuoeTqNIYQHaFS?w=256&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt="Sponsor benefits"
                      className="rounded-lg object-cover w-full h-full opacity-80 mix-blend-lighten"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Sponsorship <span className="text-pink-500">Benefits</span>
              </h2>
              <p className="text-white/70 mb-8">
                As a sponsor, you'll receive a range of benefits designed to maximize your visibility and engagement
                with participants.
              </p>
              <div className="space-y-6">
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Brand Exposure</h3>
                  <p className="text-white/70">
                    Your logo will be prominently displayed on our website, event banners, and promotional materials,
                    reaching a wide audience of tech enthusiasts.
                  </p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Speaking Opportunities</h3>
                  <p className="text-white/70">
                    Higher-tier sponsors receive speaking slots during the event, allowing you to share your company's
                    vision and connect with participants.
                  </p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Talent Recruitment</h3>
                  <p className="text-white/70">
                    Connect with skilled developers and designers who could be potential interns or employees for your
                    company.
                  </p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Product Showcase</h3>
                  <p className="text-white/70">
                    Demonstrate your products or services to an engaged audience of tech-savvy individuals who are eager
                    to learn about new technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Current Sponsor Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Our <span className="text-pink-500">Sponsor</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We are proud to have Alar Solutions as our sponsor for the Frontend Fantasia Hackathon.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex items-center justify-center aspect-square w-40 h-40">
              <img src="https://static.wixstatic.com/media/4437be_d4c9d10cdf8a462f9745e5b63e30354e~mv2.png/v1/fill/w_218,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Alar_solutions_edited.png" alt="Alar Solutions Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Become a Sponsor Today</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join us in supporting the next generation of front-end developers and designers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-900 hover:bg-white/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

