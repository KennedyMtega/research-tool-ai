"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Bot, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">ResearchAI</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/features" active={isActive("/features")}>
          Features
        </NavLink>
        <NavLink href="/how-it-works" active={isActive("/how-it-works")}>
          How it Works
        </NavLink>
        <NavLink href="/examples" active={isActive("/examples")}>
          Examples
        </NavLink>
        <NavLink href="/pricing" active={isActive("/pricing")}>
          Pricing
        </NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="text-white hover:text-purple-400" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
          <Link href="/signup">Get Started</Link>
        </Button>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white hover:bg-white/10"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 p-4 z-50 flex flex-col space-y-4"
        >
          <Link
            href="/features"
            className="text-gray-300 hover:text-white py-2 px-4 rounded-md hover:bg-purple-500/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="text-gray-300 hover:text-white py-2 px-4 rounded-md hover:bg-purple-500/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            How it Works
          </Link>
          <Link
            href="/examples"
            className="text-gray-300 hover:text-white py-2 px-4 rounded-md hover:bg-purple-500/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Examples
          </Link>
          <Link
            href="/pricing"
            className="text-gray-300 hover:text-white py-2 px-4 rounded-md hover:bg-purple-500/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <div className="pt-2 border-t border-white/10 flex flex-col space-y-2">
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                Sign In
              </Link>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function NavLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`text-gray-300 hover:text-white transition-colors relative group ${active ? "text-white" : ""}`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  )
}
