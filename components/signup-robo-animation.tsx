"use client"

import { motion } from "framer-motion"
import { Bot, Sparkles, UserPlus } from "lucide-react"

export function SignupRoboAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-8 bg-purple-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Robot body */}
          <div className="relative">
            <Bot className="w-32 h-32 text-purple-500" />

            {/* User plus animation */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <UserPlus className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating sparkles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
          }}
        >
          <Sparkles className="w-6 h-6 text-purple-400" />
        </motion.div>
      ))}

      {/* Circular rings */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border-2 border-purple-500/30"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full border-2 border-purple-500/20"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Text */}
      <motion.div
        className="absolute bottom-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h3 className="text-xl font-bold text-white mb-2">Join ResearchAI</h3>
        <p className="text-gray-400">Create your account to get started</p>
      </motion.div>
    </div>
  )
}
