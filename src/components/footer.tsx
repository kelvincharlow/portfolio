'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:kelvincharlow78@gmail.com',
    icon: Mail,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/kelvincharlow',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/kelvinmusyoki',
    icon: Linkedin,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-border/40 bg-background/95 py-8 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <p className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Kelvin M.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Full Stack Developer building modern web apps and automation tools.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <nav className="flex flex-wrap gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => window.open(link.href, '_blank')}
                  aria-label={link.name}
                  className="rounded-md border border-border/50 p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-col gap-2 border-t border-border/40 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {currentYear} Kelvin Musyoki. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
