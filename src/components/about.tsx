'use client'

import { motion } from 'framer-motion'
import { Bot, Code, Globe, Layers, Users, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const stats = [
  { icon: Code, label: 'Projects Completed', value: '50+' },
  { icon: Globe, label: 'Technologies Mastered', value: '20+' },
  { icon: Zap, label: 'Years Experience', value: '5+' },
]

const highlights = [
  {
    icon: Layers,
    title: 'Full Stack Development',
    description:
      'Building complete web applications with React, Next.js, Node.js, TypeScript, and reliable backend architecture.',
  },
  {
    icon: Bot,
    title: 'Automation & Data',
    description:
      'Creating practical automation workflows, scraping tools, and data-driven systems with platforms like Apify.',
  },
  {
    icon: Users,
    title: 'Remote Collaboration',
    description:
      'Working clearly across time zones with strong communication, ownership, and steady delivery habits.',
  },
]

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500 mb-3">
                  Who I am
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">
                  A developer focused on clean, useful, and scalable digital products.
                </h3>
                <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  <p>
                    I'm a passionate <strong className="text-foreground">Full Stack Developer</strong> with a love for creating
                    beautiful, functional, and scalable web applications.
                  </p>
                  <p>
                    I specialize in <strong className="text-foreground">React</strong>,{' '}
                    <strong className="text-foreground">Next.js</strong>,{' '}
                    <strong className="text-foreground">Node.js</strong>, and{' '}
                    <strong className="text-foreground">TypeScript</strong>, with a strong interest in automation,
                    web scraping, and practical systems that save people time.
                  </p>
                  <p>
                    I enjoy working with remote teams, communicating clearly, and turning project ideas into reliable,
                    polished user experiences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto mt-10 sm:mt-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm font-medium">
                    {stat.label}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
