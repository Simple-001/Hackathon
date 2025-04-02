import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about the Frontend Fantasia Hackathon.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-zinc-900 border border-zinc-800 rounded-lg px-6">
                <AccordionTrigger className="text-white text-lg font-medium py-4">
                  Who can participate in the hackathon?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  The Frontend Fantasia Hackathon is open to all students currently enrolled in a college or university.
                  Participants should have some knowledge of front-end development or UI/UX design. Teams must consist
                  of 2-4 members, and all team members must be students.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-zinc-900 border border-zinc-800 rounded-lg px-6">
                <AccordionTrigger className="text-white text-lg font-medium py-4">
                  What are the judging criteria?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  Projects will be judged based on four main criteria, each worth 25 points:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      Design & Aesthetics: Visual appeal, color scheme, typography, and overall design consistency.
                    </li>
                    <li>
                      User Experience: Intuitive navigation, accessibility, responsiveness, and overall usability.
                    </li>
                    <li>
                      Technical Implementation: Code quality, performance optimization, and appropriate use of
                      technologies.
                    </li>
                    <li>
                      Innovation & Creativity: Originality of the idea, creative problem-solving, and unique features.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-zinc-900 border border-zinc-800 rounded-lg px-6">
                <AccordionTrigger className="text-white text-lg font-medium py-4">
                  What will the winners get?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  The winning teams will receive the following prizes:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      First Place: Rs. 2000 cash prize, winner certificates, internship opportunities, and feature on
                      our website.
                    </li>
                    <li>Second Place: Rs. 1000 cash prize, runner-up certificates, and feature on our social media.</li>
                    <li>
                      Third Place: Rs. 500 cash prize, second runner-up certificates, recognition at the event, and swag
                      bag with goodies.
                    </li>
                  </ul>
                  All participants will receive participation certificates and swag items.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-zinc-900 border border-zinc-800 rounded-lg px-6">
                <AccordionTrigger className="text-white text-lg font-medium py-4">
                  How do I register for the hackathon?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  Registration is simple! Just visit the{" "}
                  <Link href="/register" className="text-pink-500 hover:text-pink-400">
                    Registration Page
                  </Link>{" "}
                  and fill out the form with your team details. Make sure to provide information for all team members.
                  Registration is free and will remain open until April 1, 2025, or until all spots are filled.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-zinc-900 border border-zinc-800 rounded-lg px-6">
                <AccordionTrigger className="text-white text-lg font-medium py-4">
                  What should I bring to the hackathon?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  You should bring:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Laptop and charger</li>
                    <li>Student ID for verification</li>
                    <li>Notebook and pen for brainstorming</li>
                    <li>Water bottle to stay hydrated</li>
                    <li>Any personal items you might need during the day</li>
                  </ul>
                  We'll provide food, drinks, and a comfortable workspace for all participants.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-zinc-900 border border-zinc-800 rounded-lg px-6">
                <AccordionTrigger className="text-white text-lg font-medium py-4">
                  Do I need to have a project idea before registering?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  No, you don't need to have a project idea before registering. You can come up with an idea during the
                  hackathon or even change your idea on the day of the event. However, if you do have an idea in mind,
                  you can mention it in the registration form, which might help you prepare better.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-zinc-900 border border-zinc-800 rounded-lg px-6">
                <AccordionTrigger className="text-white text-lg font-medium py-4">
                  What technologies can I use for my project?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  You can use any front-end technologies, frameworks, or libraries of your choice. This includes but is
                  not limited to HTML, CSS, JavaScript, React, Vue, Angular, Svelte, Next.js, Tailwind CSS, Bootstrap,
                  and more. The focus is on creating an impressive UI/UX, so choose technologies that will help you
                  achieve that goal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-zinc-900 border border-zinc-800 rounded-lg px-6">
                <AccordionTrigger className="text-white text-lg font-medium py-4">
                  Can I start working on my project before the hackathon?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  No, all coding and design work must be done during the hackathon. You can brainstorm ideas and create
                  wireframes before the event, but the actual implementation must be done during the 7-hour hackathon
                  period. This ensures a fair competition for all participants.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-zinc-900 border border-zinc-800 rounded-lg px-6">
                <AccordionTrigger className="text-white text-lg font-medium py-4">
                  How will the presentations work?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  Each team will have 3 minutes to present their project to the judges, followed by a 2-minute Q&A
                  session. You should focus on demonstrating the UI/UX of your application, explaining your design
                  choices, and highlighting any unique features. Make sure to practice your presentation to stay within
                  the time limit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Still Have <span className="text-pink-500">Questions?</span>
            </h2>
            <p className="text-white/70 mb-8">
              If you couldn't find the answer to your question, feel free to reach out to us directly.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white border-none"
            >
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join the Hackathon?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Register your team today and be part of this exciting front-end development challenge.
          </p>
          <Button asChild size="lg" className="bg-white text-indigo-900 hover:bg-white/90">
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

