import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About the Hackathon</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Learn more about Frontend Fantasia, a design-centric hackathon focused on UI/UX and front-end development.
          </p>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Our <span className="text-pink-500">Objectives</span>
              </h2>
              <p className="text-white/70 mb-8">
                Frontend Fantasia is designed to challenge participants to create interactive, responsive web designs
                that push the boundaries of what's possible on the web. Our goal is to foster creativity, innovation,
                and technical excellence in UI/UX and front-end development.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Encourage Innovation:</span> Push the boundaries of web
                    design and development
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Develop Industry-Ready Skills:</span> Prepare participants
                    for real-world challenges
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Foster Collaboration:</span> Build teamwork and
                    communication skills
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Showcase Talent:</span> Provide a platform for students to
                    demonstrate their abilities
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-700 p-1">
                <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-29%20004512-qKJuFDohYVo6JDAae2sdnzviVqh6T3.png"
                    alt="Frontend Fantasia Logo"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-zinc-900 p-4 rounded-xl border border-zinc-800 shadow-xl">
                <div className="text-center">
                  <p className="text-white/70 text-sm">Target Audience</p>
                  <p className="text-xl font-bold text-white">Students passionate about front-end tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Why It <span className="text-pink-500">Matters</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Frontend Fantasia is more than just a competition—it's an opportunity to develop skills that are in high
              demand in the tech industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Industry Relevance</h3>
              <p className="text-white/70">
                UI/UX and front-end development skills are in high demand across the tech industry, making this
                hackathon a valuable experience for future careers.
              </p>
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Practical Experience</h3>
              <p className="text-white/70">
                Participants gain hands-on experience with real-world challenges, developing problem-solving skills that
                are essential in the workplace.
              </p>
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Networking Opportunities</h3>
              <p className="text-white/70">
                Connect with like-minded individuals, potential employers, and industry professionals who can help
                advance your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Container */}
            <div className="order-2 md:order-1">
              <div className="relative">
                {/* Image Wrapper */}
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400 p-1">
                  <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center relative">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/015/316/819/original/programmer-writing-code-flat-concept-illustration-editable-2d-cartoon-character-on-white-for-web-design-freelance-creative-idea-for-website-mobile-presentation-vector.jpg"
                      alt="Frontend Fantasia Logo"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Target <span className="text-pink-500">Audience</span>
              </h2>
              <p className="text-white/70 mb-8">
                Frontend Fantasia is designed for students who are passionate about front-end technologies and want to
                challenge themselves to create innovative web experiences. Whether you're a beginner or an experienced
                developer, there's a place for you at our hackathon.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Computer Science Students:</span> Put your programming
                    skills to the test
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Design Students:</span> Showcase your UI/UX design
                    abilities
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Self-taught Developers:</span> Demonstrate your skills and
                    learn from peers
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                  <p className="text-white/70">
                    <span className="text-white font-medium">Tech Enthusiasts:</span> Explore the world of front-end
                    development
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

