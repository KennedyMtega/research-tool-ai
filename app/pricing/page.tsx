"use client"

import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { motion } from "framer-motion"
import { Check, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { RoboAnimation } from "@/components/robo-animation"

// Currency conversion rates (approximate)
const CONVERSION_RATES = {
  TZS: 1,
  USD: 0.00039,
  EUR: 0.00036,
  GBP: 0.00031,
}

type Currency = keyof typeof CONVERSION_RATES

export default function PricingPage() {
  const [currency, setCurrency] = useState<Currency>("TZS")

  const convertPrice = (priceInTZS: number) => {
    const converted = priceInTZS * CONVERSION_RATES[currency]
    return currency === "TZS" ? priceInTZS.toLocaleString() : converted.toFixed(2)
  }

  const getCurrencySymbol = (curr: Currency) => {
    switch (curr) {
      case "USD":
        return "$"
      case "EUR":
        return "€"
      case "GBP":
        return "£"
      case "TZS":
        return "TZS"
      default:
        return ""
    }
  }

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
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Pricing
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Choose the plan that works best for your research needs
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-2 rounded-lg border border-white/10 flex space-x-2">
              {Object.keys(CONVERSION_RATES).map((curr) => (
                <Button
                  key={curr}
                  variant="ghost"
                  className={`${
                    currency === curr
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  } transition-colors duration-200`}
                  onClick={() => setCurrency(curr as Currency)}
                >
                  {curr}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Basic"
              price={convertPrice(85000)}
              currency={getCurrencySymbol(currency)}
              description="Perfect for individual researchers"
              features={[
                "5 research papers per month",
                "Basic presentation generation",
                "Simple data visualizations",
                "Text summaries",
                "Email support",
              ]}
              buttonText="Get Started"
              index={0}
              popular={false}
            />

            <PricingCard
              title="Pro"
              price={convertPrice(195000)}
              currency={getCurrencySymbol(currency)}
              description="Ideal for research teams"
              features={[
                "20 research papers per month",
                "Advanced presentations",
                "Interactive visualizations",
                "Audio summaries",
                "Priority support",
                "Collaboration tools",
              ]}
              buttonText="Get Started"
              index={1}
              popular={true}
            />

            <PricingCard
              title="Enterprise"
              price={convertPrice(450000)}
              currency={getCurrencySymbol(currency)}
              description="For organizations and institutions"
              features={[
                "Unlimited research papers",
                "Custom branding",
                "Advanced analytics",
                "API access",
                "Dedicated account manager",
                "Training sessions",
                "Custom integrations",
              ]}
              buttonText="Contact Sales"
              index={2}
              popular={false}
            />
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

interface PricingCardProps {
  title: string
  price: string
  currency: string
  description: string
  features: string[]
  buttonText: string
  index: number
  popular: boolean
}

function PricingCard({ title, price, currency, description, features, buttonText, index, popular }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card
        className={`relative overflow-hidden backdrop-blur-sm border ${
          popular ? "bg-purple-900/30 border-purple-500" : "bg-white/5 border-white/10 hover:border-purple-500/50"
        } transition-all h-full flex flex-col`}
      >
        {popular && (
          <div className="absolute top-0 right-0">
            <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 transform rotate-0 translate-x-2 -translate-y-0">
              MOST POPULAR
            </div>
          </div>
        )}

        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white flex items-center">
            {title === "Pro" && <Bot className="w-5 h-5 text-purple-400 mr-2" />}
            {title}
          </CardTitle>
          <div className="mt-4">
            <span className="text-4xl font-bold text-white">
              {currency} {price}
            </span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>
          <p className="text-gray-400 mt-2">{description}</p>
        </CardHeader>

        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button
            className={`w-full ${
              popular
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "bg-white/10 hover:bg-white/20 border border-white/20 hover:border-purple-500/50 text-white"
            } transition-colors duration-200`}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
