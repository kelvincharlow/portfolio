'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'Mavuno Market',
    description: 'Online marketplace website.',
    image: '/projects/Mavuno Market.png',
    liveUrl: 'https://mavunomarkert.online/',
    technologies: ['Marketplace', 'Web App', 'Responsive'],
  },
  {
    title: 'Masfy Consultants',
    description: 'Consulting engineers company website.',
    image: '/projects/Masfy Consulting Engineers .png',
    liveUrl: 'https://masfyconsultants.com/',
    technologies: ['Company Site', 'Consulting', 'Responsive'],
  },
  {
    title: 'Tahirika',
    description: 'Afrotech solutions landing website.',
    image: '/projects/Tahirika Afrotech Solutions.png',
    liveUrl: 'https://tahirika.vercel.app/',
    technologies: ['Landing Page', 'Tech Brand', 'Responsive'],
  },
  {
    title: 'KodiSafe',
    description: 'Property and rental safety platform.',
    image: '/projects/Kodisafe.png',
    liveUrl: 'https://kodi-safe.vercel.app/',
    status: 'Under development',
    technologies: ['Web App', 'Property Tech', 'Responsive'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected live projects and websites I have worked on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full overflow-hidden border-border/50 bg-card/50 py-0 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video overflow-hidden bg-muted p-2 sm:p-3">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02] sm:p-3"
                  />
                </div>

                <CardContent className="p-4 sm:p-5">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground sm:text-2xl">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.status ? (
                    <Button
                      size="sm"
                      disabled
                      className="w-full font-semibold"
                    >
                      {project.status}
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold"
                    >
                      Visit Site
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
