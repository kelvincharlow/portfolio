'use client'

import { motion } from 'framer-motion'
import { Code, Globe, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const stats = [
  { icon: Code, label: 'Projects Completed', value: '50+' },
  { icon: Globe, label: 'Technologies Mastered', value: '20+' },
  { icon: Zap, label: 'Years Experience', value: '5+' },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate <strong>Full Stack Developer</strong> with a love for creating 
                beautiful, functional, and scalable web applications. My journey in web 
                development started over 5 years ago, and I've been constantly learning and 
                evolving with the rapidly changing landscape of modern web technologies.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Specializing in <strong>React</strong>, <strong>Next.js</strong>, 
                <strong>Node.js</strong>, and <strong>TypeScript</strong>, I build end-to-end 
                applications that prioritize performance, scalability, and user experience. 
                I'm also passionate about automation and have extensive experience with 
                <strong> Apify</strong> for web scraping and data automation projects.
              </p>              <p className="text-lg leading-relaxed text-muted-foreground">
                As a <strong>remote work advocate</strong>, I've successfully collaborated with 
                teams across different time zones, delivering high-quality solutions while 
                maintaining excellent communication and project management skills. I believe in 
                continuous learning and staying up-to-date with the latest industry trends and 
                best practices.
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
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
      </div>
    </section>
  )
}