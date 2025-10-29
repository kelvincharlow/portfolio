'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-muted-foreground">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span className="text-muted-foreground">using</span>
            <span className="font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Next.js
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            © {currentYear} Kelvin Musyoki. All rights reserved.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <p className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default">
              Designed & Developed with passion for modern web experiences
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}