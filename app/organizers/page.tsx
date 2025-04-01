import { Linkedin, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const organizers = [
  {
    name: "Kabir Sood",
    role: "Lead Organizer",
    phone: "+91 76967-69890",
    linkedin: "https://www.linkedin.com/in/kabir-sood-89087a200/",
    image: "/images/organizer2.jpeg",
    bio: "Passionate about frontend development and creating immersive user experiences. Kabir leads the Frontend Fantasia team with a vision to inspire innovation.",
  },
  {
    name: "Jashanjeet Kaur",
    role: "Technical Director",
    phone: "+91 78888-98057",
    linkedin: "http://linkedin.com/in/jashanjeet-kaur-495985318",
    image: "/images/organizer1.jpeg",
    bio: "With expertise in modern JavaScript frameworks and UI/UX design, Jashanjeet ensures the technical excellence of Frontend Fantasia and is always available to answer all your queries.",
  },
  {
    name: "Mrs. Shivani Tayal",
    role: "Head Of Department",
    phone: "+91 73558-23045",
    linkedin:
      "https://www.linkedin.com/in/arshnoor-singh-80a244357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "images/WhatsApp Image 2025-04-01 at 18.51.50_2899a0a3.jpg",
    bio: "Dedicated to building inclusive tech communities, Mrs. Shivani manages partnerships and participant engagement for Frontend Fantasia. Feel free to contact him anytime.",
  },
]

export default function OrganizersPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
            Meet Our Organizers
          </h1>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            The passionate team behind Frontend Fantasia is dedicated to creating an exceptional hackathon experience
            for all participants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizers.map((organizer) => (
            <Card
              key={organizer.name}
              className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-pink-500/20 to-orange-400/20">
                <img
                  src={organizer.image || "/placeholder.svg"}
                  alt={`Photo of ${organizer.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-1">{organizer.name}</h2>
                <p className="text-pink-400 mb-4">{organizer.role}</p>
                <p className="text-zinc-400 mb-6">{organizer.bio}</p>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center text-zinc-300">
                    <Phone className="h-5 w-5 mr-2 text-pink-400" />
                    <span>{organizer.phone}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center border-zinc-700 hover:border-pink-500 hover:bg-pink-500/10"
                    asChild
                  >
                    <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 mr-2" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

