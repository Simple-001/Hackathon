"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [teamSize, setTeamSize] = useState<string>("2")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://getform.io/f/bkkyveeb", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("Network error. Please try again.")
    }
  }

  const renderTeamMemberFields = () => {
    const fields = []
    const size = Number.parseInt(teamSize)

    for (let i = 2; i <= size; i++) {
      fields.push(
        <div key={i} className="space-y-4 mb-6 p-4 bg-zinc-900 rounded-lg">
          <h3 className="text-lg font-medium text-white">Team Member {i}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`name-${i}`}>Full Name</Label>
              <Input name={`name-${i}`} id={`name-${i}`} placeholder="Enter full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`phone-${i}`}>Contact Number</Label>
              <Input name={`phone-${i}`} id={`phone-${i}`} placeholder="Enter contact number" required />
            </div>
          </div>
        </div>,
      )
    }

    return fields
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-zinc-950 border-zinc-800">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle className="text-2xl text-white">Registration Successful!</CardTitle>
              <CardDescription className="text-white/70">
                Your team has been registered for the Frontend Fantasia Hackathon.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center text-white/70">
              <p className="mb-4">
                We've sent a confirmation email to the team leader’s email address with all the details.
              </p>
              <p>Please check your spam folder if you don’t see it in your inbox.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Register Your Team</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join us for the Frontend Fantasia Hackathon and showcase your UI/UX skills.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Registration Form</CardTitle>
                <CardDescription className="text-white/70">
                  Please fill out the form below to register your team for the hackathon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Team Name */}
                    <div className="space-y-2">
                      <Label htmlFor="team-name">Team Name</Label>
                      <Input name="team-name" id="team-name" placeholder="Enter your team name" required />
                    </div>

                    {/* Team Size */}
                    <div className="space-y-2">
                      <Label htmlFor="team-size">Team Size</Label>
                      <Select value={teamSize} onValueChange={setTeamSize}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2 Members</SelectItem>
                          <SelectItem value="3">3 Members</SelectItem>
                          <SelectItem value="4">4 Members</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Team Leader Details */}
                    <div className="space-y-2">
                      <Label htmlFor="leader-name">Team Leader Name</Label>
                      <Input name="leader-name" id="leader-name" placeholder="Enter team leader name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="leader-phone">Team Leader Contact</Label>
                      <Input name="leader-phone" id="leader-phone" placeholder="Enter contact number" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="leader-email">Team Leader Email</Label>
                      <Input
                        type="email"
                        name="leader-email"
                        id="leader-email"
                        placeholder="Enter team leader email"
                        required
                      />
                    </div>

                    {/* Mode of Attending (New) */}
                    <div className="space-y-2">
                      <Label htmlFor="mode-of-attending">Mode of Attending</Label>
                      <Select name="mode-of-attending" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="offline">Offline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Project Idea */}
                    <div className="space-y-2">
                      <Label htmlFor="project-idea">Project Idea (Optional)</Label>
                      <Textarea
                        name="project-idea"
                        id="project-idea"
                        placeholder="Briefly describe your project idea"
                        className="min-h-[100px]"
                      />
                    </div>

                    {/* Additional Team Members */}
                    {renderTeamMemberFields()}

                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white">
                      Submit Registration
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

