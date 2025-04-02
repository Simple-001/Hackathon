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
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Why <span className="text-pink-500">Sponsor</span> Us?
          </h2>
          <p className="text-white/70 mb-8 text-center">
            Sponsoring the Frontend Fantasia Hackathon offers your company a unique opportunity to connect with talented developers, showcase your brand, and support innovation in the tech community.
          </p>
        </div>
      </section>

      {/* Sponsorship Benefits Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Sponsorship <span className="text-pink-500">Benefits</span>
          </h2>
          <p className="text-white/70 mb-8 text-center">
            As a sponsor, you'll receive a range of benefits designed to maximize your visibility and engagement with participants.
          </p>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Our <span className="text-pink-500">Sponsors</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex items-center justify-center">
              <img src="/images/Alar_solutions.png" alt="Sponsor Logo" className="w-16 h-16 object-contain" />
            </div>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex items-center justify-center">
                <p className="text-white/50 text-sm">Your logo here</p>
              </div>
            ))}
          </div>
          <p className="text-white/70 mt-8">
            Interested in becoming a sponsor? Contact us to learn more about our sponsorship opportunities.
          </p>
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

