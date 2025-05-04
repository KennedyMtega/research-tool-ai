"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Presentation, PieChart, Headphones } from "lucide-react"
import { RoboAnimation } from "@/components/robo-animation"
import Image from "next/image"

export default function ExamplesPage() {
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

        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See ResearchAI in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Action</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Explore real examples of how our platform transforms complex research
            </p>
          </motion.div>

          <Tabs defaultValue="presentations" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8 bg-white/5 backdrop-blur-sm">
              <TabsTrigger
                value="presentations"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white hover:bg-white/10 data-[state=inactive]:hover:text-white transition-colors duration-200"
              >
                Presentations
              </TabsTrigger>
              <TabsTrigger
                value="visualizations"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white hover:bg-white/10 data-[state=inactive]:hover:text-white transition-colors duration-200"
              >
                Visualizations
              </TabsTrigger>
              <TabsTrigger
                value="summaries"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white hover:bg-white/10 data-[state=inactive]:hover:text-white transition-colors duration-200"
              >
                Summaries
              </TabsTrigger>
              <TabsTrigger
                value="podcasts"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white hover:bg-white/10 data-[state=inactive]:hover:text-white transition-colors duration-200"
              >
                Podcasts
              </TabsTrigger>
            </TabsList>

            <TabsContent value="presentations" className="mt-4">
              <ExampleSection
                title="Research Presentations"
                description="Transform complex papers into engaging slide decks"
                icon={<Presentation className="w-8 h-8 text-purple-500" />}
                examples={[
                  {
                    title: "Climate Change Research",
                    description:
                      "A 40-page climate research paper transformed into a 15-slide presentation with key findings and visualizations.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    title: "Medical Study Results",
                    description:
                      "Clinical trial results converted into an accessible presentation for non-specialist audiences.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="visualizations" className="mt-4">
              <ExampleSection
                title="Data Visualizations"
                description="Convert complex data into intuitive visual formats"
                icon={<PieChart className="w-8 h-8 text-purple-500" />}
                examples={[
                  {
                    title: "Economic Trends Analysis",
                    description: "Statistical data from economic research visualized as interactive charts and graphs.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    title: "Biological Systems Mapping",
                    description:
                      "Complex biological processes visualized as interactive diagrams with explanatory elements.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="summaries" className="mt-4">
              <ExampleSection
                title="Research Summaries"
                description="Concise overviews of complex research papers"
                icon={<FileText className="w-8 h-8 text-purple-500" />}
                examples={[
                  {
                    title: "Quantum Computing Research",
                    description: "A technical quantum computing paper summarized at three different complexity levels.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    title: "Psychological Study",
                    description: "A comprehensive psychological study condensed into key findings and implications.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="podcasts" className="mt-4">
              <ExampleSection
                title="Research Podcasts"
                description="Listen to your research in conversational audio format"
                icon={<Headphones className="w-8 h-8 text-purple-500" />}
                examples={[
                  {
                    title: "Environmental Science Discussion",
                    description:
                      "A research paper on environmental conservation converted into a 15-minute podcast episode.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    title: "Technology Trends Analysis",
                    description:
                      "A technical paper on emerging technologies transformed into an accessible audio discussion.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Animated robot */}
        <div className="fixed bottom-0 right-0 w-64 h-64 opacity-50 pointer-events-none">
          <RoboAnimation />
        </div>
      </div>
    </main>
  )
}

interface Example {
  title: string
  description: string
  image: string
}

interface ExampleSectionProps {
  title: string
  description: string
  icon: React.ReactNode
  examples: Example[]
}

function ExampleSection({ title, description, icon, examples }: ExampleSectionProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center mb-6">
        <div className="mr-4 p-2 bg-purple-500/10 rounded-lg">{icon}</div>
        <div>
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {examples.map((example, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="relative h-48 w-full">
                <Image src={example.image || "/placeholder.svg"} alt={example.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{example.title}</h3>
                <p className="text-gray-400 mb-4">{example.description}</p>
                <Button
                  variant="outline"
                  className="border-purple-500 text-white hover:bg-purple-500/30 hover:border-purple-400 transition-colors duration-200"
                >
                  View Example
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200">
          Try With Your Research
        </Button>
      </div>
    </motion.div>
  )
}
