"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Event Details", href: "/event-details" },
  { name: "Judging", href: "/judging" },
  { name: "Organizers", href: "/organizers" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo Container */}
        <div className="flex items-center space-x-6">
          {/* Hackathon Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/WhatsApp Image 2025-04-01 at 14.52.25_277abcb2.jpg"
              alt="Frontend Fantasia Logo"
              className="h-12 w-auto md:h-14 rounded-md"
            />
          </Link>

          {/* College Logo */}
          <Link href="https://www.ciis.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img
              src="https://www.ciis.ac.in/wp-content/uploads/ciis.png"
              alt="CIIS Logo"
              className="h-10 w-auto md:h-12"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm rounded-md transition-colors",
                pathname === link.href
                  ? "text-white bg-zinc-800"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="ml-4 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white border-none"
          >
            <Link href="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-zinc-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-zinc-800">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-3 py-2 text-base rounded-md",
                  pathname === link.href
                    ? "text-white bg-zinc-800"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 pb-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white border-none"
              >
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  Register
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

