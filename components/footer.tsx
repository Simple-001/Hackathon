import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
                Frontend Fantasia
              </span>
            </Link>
            <p className="mt-4 text-zinc-400 max-w-md">
              A design-centric hackathon focused on UI/UX and front-end development, organized by Continental Institute
              for International Studies.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.instagram.com/frontend_fantasia?igsh=MXYyZDZ0M2V6ZWo3aQ%3D%3D&utm_source=qr"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A105932751&keywords=continental%20institute%20for%20international%20studies&origin=RICH_QUERY_SUGGESTION&position=0&searchId=ded35704-eef9-458e-a17f-b90d81229a4a&sid=cEk&spellCorrectionEnabled=false"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/event-details" className="text-zinc-400 hover:text-white transition-colors">
                  Event Details
                </Link>
              </li>
              <li>
                <Link href="/judging" className="text-zinc-400 hover:text-white transition-colors">
                  Judging Criteria
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-zinc-400 hover:text-white transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-zinc-400">Continental Institute for International Studies</li>
              <li>
                <a
                  href="http://linkedin.com/in/kabir-sood-89087a200/"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Organisers LinkedIn
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-zinc-400 hover:text-white transition-colors">
                  +91 76967-69890
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Frontend Fantasia Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

