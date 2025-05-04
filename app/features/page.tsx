"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { motion } from "framer-motion"
import { Bot, FileText, PieChart, Zap, Lightbulb, Presentation } from "lucide-react"
import { Card } from "@/components/ui/card"
import { RoboAnimation } from "@/components/robo-animation"

export default function FeaturesPage() {
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
              Powerful{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Features
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Discover how ResearchAI transforms complex research papers into engaging, accessible content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Animated robot */}
        <div className="fixed bottom-0 right-0 w-64 h-64 opacity-50 pointer-events-none">
          <RoboAnimation />
        </div>
      </div>
    </main>
  )
}

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <FileText className="w-10 h-10 text-purple-500" />,
    title: "Smart Document Analysis",
    description:
      "Our AI analyzes complex research papers, extracting key insights, methodologies, and findings with remarkable accuracy.",
  },
  {
    icon: <Presentation className="w-10 h-10 text-purple-500" />,
    title: "Presentation Generation",
    description:
      "Transform research into visually stunning presentations with automatically generated slides, charts, and talking points.",
  },
  {
    icon: <PieChart className="w-10 h-10 text-purple-500" />,
    title: "Data Visualization",
    description:
      "Convert complex data tables and statistics into intuitive, interactive visualizations that make your research accessible.",
  },
  {
    icon: <Bot className="w-10 h-10 text-purple-500" />,
    title: "AI Research Assistant",
    description:
      "Get answers to questions about your research papers with our intelligent AI assistant that understands context and nuance.",
  },
  {
    icon: <Zap className="w-10 h-10 text-purple-500" />,
    title: "Instant Summaries",
    description:
      "Generate concise summaries of lengthy research papers at different detail levels - from executive briefs to comprehensive overviews.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-purple-500" />,
    title: "Research Insights",
    description:
      "Uncover hidden connections and insights across multiple papers to identify trends and opportunities in your field.",
  },
]

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-200 group">
        <div className="mb-4 p-3 bg-purple-500/10 rounded-lg w-fit group-hover:bg-purple-500/20 transition-colors duration-200">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
          {feature.title}
        </h3>
        <p className="text-gray-400">{feature.description}</p>
      </Card>
    </motion.div>
  )
}
