"use client"

import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import { SignupRoboAnimation } from "@/components/signup-robo-animation"

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-6 py-16 flex items-center justify-center min-h-[calc(100vh-76px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center justify-center"
            >
              <div className="w-full h-full max-w-md">
                <SignupRoboAnimation />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Sparkles className="w-8 h-8 text-purple-500 mr-2" />
                    <CardTitle className="text-2xl font-bold text-white">Get Started</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    Create your ResearchAI account and start transforming your research
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-white">
                            First Name
                          </Label>
                          <Input id="firstName" placeholder="John" className="bg-white/5 border-white/10 text-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-white">
                            Last Name
                          </Label>
                          <Input id="lastName" placeholder="Doe" className="bg-white/5 border-white/10 text-white" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          placeholder="your.email@example.com"
                          type="email"
                          className="bg-white/5 border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-white">
                          Password
                        </Label>
                        <Input id="password" type="password" className="bg-white/5 border-white/10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-white">
                          Confirm Password
                        </Label>
                        <Input id="confirmPassword" type="password" className="bg-white/5 border-white/10 text-white" />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200 focus:ring-2 focus:ring-purple-500/50">
                    Create Account
                  </Button>
                  <div className="text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-purple-400 hover:text-purple-300">
                      Sign in
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
