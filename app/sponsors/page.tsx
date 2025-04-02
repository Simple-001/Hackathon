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
              <img src="/images/Alar_solutions.png" alt="Alar Solutions Logo" className="w-full h-full object-contain" />
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

