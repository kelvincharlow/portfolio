'use client'

import { motion } from 'framer-motion'
import { Bot, Code2, Database, GitBranch, Globe, Palette, Settings } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    title: 'Core Stack',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    icon: Globe,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
  },
  {
    title: 'Backend & Data',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    title: 'Automation',
    icon: Bot,
    skills: ['Apify', 'Web Scraping', 'REST APIs', 'Data Workflows', 'Integrations'],
  },
  {
    title: 'Tools',
    icon: Settings,
    skills: ['Git', 'Docker', 'Vercel', 'Postman', 'Figma'],
  },
]

const workflow = [
  { icon: Palette, label: 'Interface polish' },
  { icon: GitBranch, label: 'Version control' },
  { icon: Settings, label: 'Deployment ready' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools I use to build reliable web apps, automation systems, and polished interfaces.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-5 sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600">
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-background/40">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8"
        >
          {workflow.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-3 rounded-xl border border-border/50 bg-card/40 px-4 py-3 text-sm font-medium text-muted-foreground backdrop-blur-sm"
            >
              <item.icon className="h-4 w-4 text-indigo-500" />
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
