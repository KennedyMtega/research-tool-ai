"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { motion } from "framer-motion"
import { FileUp, Bot, Presentation, Sparkles } from "lucide-react"
import { RoboAnimation } from "@/components/robo-animation"

export default function HowItWorksPage() {
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
              How{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                It Works
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Our simple four-step process transforms complex research into engaging content
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <StepItem key={index} step={step} index={index} isLast={index === steps.length - 1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to transform your research?</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>

        {/* Animated robot */}
        <div className="fixed bottom-0 right-0 w-64 h-64 opacity-50 pointer-events-none">
          <RoboAnimation />
        </div>
      </div>
    </main>
  )
}

interface Step {
  icon: React.ReactNode
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: <FileUp className="w-10 h-10 text-purple-500" />,
    title: "Upload Your Research",
    description:
      "Simply upload your research paper in PDF, DOCX, or other common formats. Our system accepts papers of any length and complexity.",
  },
  {
    icon: <Bot className="w-10 h-10 text-purple-500" />,
    title: "AI Analysis",
    description:
      "Our advanced AI analyzes your paper, identifying key concepts, methodologies, findings, and conclusions. The system understands context and extracts meaningful insights.",
  },
  {
    icon: <Presentation className="w-10 h-10 text-purple-500" />,
    title: "Content Generation",
    description:
      "Based on the analysis, our platform generates various content formats including presentations, summaries, visualizations, and interactive elements.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-purple-500" />,
    title: "Review & Export",
    description:
      "Review the generated content, make any desired adjustments, and export in your preferred format. Share your research with confidence and clarity.",
  },
]

function StepItem({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className="flex items-start mb-12 relative"
    >
      <div className="mr-6 relative">
        <motion.div
          className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500 hover:bg-purple-500/30 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
        >
          {step.icon}
        </motion.div>
        {!isLast && (
          <div className="absolute top-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent -translate-x-1/2" />
        )}
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-white mb-2">
          Step {index + 1}: {step.title}
        </h3>
        <p className="text-gray-400 text-lg">{step.description}</p>
      </div>
    </motion.div>
  )
}
