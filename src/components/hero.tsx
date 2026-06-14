'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Mail, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import profilePhoto from '@/pp.jpeg'

const roles = [
  'Full Stack Developer',
  'Automation Builder',
  'Remote Work Advocate',
]

const stack = ['Next.js', 'TypeScript', 'Node.js', 'Apify', 'Tailwind CSS']
const emailAddress = 'kelvincharlow78@gmail.com'

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-background to-purple-500/10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 py-6 sm:py-8 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[minmax(0,1fr)_420px] lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex h-full flex-col justify-center rounded-3xl border border-border/50 bg-card/35 p-5 backdrop-blur-sm sm:p-8 lg:min-h-[560px]"
          >
            <Badge variant="outline" className="mb-5 w-fit bg-card/60 px-4 py-2 text-sm backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4 text-indigo-500" />
              Full Stack Developer
            </Badge>

            <h1 className="mb-5 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Kelvin Musyoki.
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Full Stack Developer.
              </span>
            </h1>

            <div className="mb-4 min-h-8 text-xl text-muted-foreground sm:text-2xl">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4 }}
                className="inline-block font-medium text-foreground"
              >
                {roles[currentRole]}
              </motion.span>
            </div>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build modern web applications, automation tools, and clean user interfaces with React, Next.js, and TypeScript.
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 sm:w-auto"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full px-8 py-6 text-lg font-semibold rounded-xl border-2 hover:bg-accent transition-all duration-300 transform hover:scale-105 sm:w-auto"
                onClick={() => scrollToSection('#projects')}
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <Badge key={item} variant="secondary" className="rounded-full px-3 py-1">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-600/20 blur-2xl" />
            <div className="relative flex h-full flex-col rounded-3xl border border-border/50 bg-card/70 p-5 shadow-2xl backdrop-blur-sm lg:min-h-[560px]">
              <div className="mb-5 flex items-center justify-between">
                <Badge variant="outline" className="bg-background/60">
                  Developer profile
                </Badge>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-500">
                  Available
                </span>
              </div>

              <div className="relative mb-5 overflow-hidden rounded-2xl border border-border/50 bg-muted/40 p-3">
                <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl">
                  <Image
                    src={profilePhoto}
                    alt="Kelvin Musyoki"
                    fill
                    priority
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-5 rounded-2xl border border-border/50 bg-background/50 p-4 text-center">
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">Full Stack Developer</h2>
                <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-indigo-500" />
                  Remote-ready web and automation work
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Web Apps</Badge>
                  <Badge variant="secondary">Automation</Badge>
                  <Badge variant="secondary">UI Polish</Badge>
                </div>
              </div>

              <div className="mt-auto space-y-3">
                <p className="text-center text-sm text-muted-foreground">
                  Available for freelance and collaborative projects.
                </p>
                <Button
                  onClick={() => window.location.href = `mailto:${emailAddress}`}
                  className="w-full min-w-0 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold"
                >
                  <Mail className="mr-2 h-4 w-4 shrink-0" />
                  <span className="truncate">{emailAddress}</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('#about')}
            className="rounded-full p-3 hover:bg-accent/50 transition-all duration-300"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
