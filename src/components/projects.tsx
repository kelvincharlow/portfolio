'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'Remote Job Finder',
    description: 'Automated job scraping platform built with Apify and Next.js. Aggregates remote opportunities from multiple job boards with advanced filtering and real-time notifications.',
    image: '/project-1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Apify', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: 'https://remotejobfinder.demo',
    githubUrl: 'https://github.com/kelvinmusyoki/remote-job-finder',
    featured: true,
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce platform with admin dashboard, user authentication, payment integration, and real-time analytics. Complete CRUD operations with secure API endpoints.',
    image: '/project-2.jpg',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Prisma', 'TypeScript'],
    liveUrl: 'https://ecommerce-platform.demo',
    githubUrl: 'https://github.com/kelvinmusyoki/ecommerce-platform',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing modern web development skills. Features smooth animations, dark/light mode, and fully responsive design.',
    image: '/project-3.jpg',
    technologies: ['Next.js', 'Framer Motion', 'shadcn/ui', 'Tailwind CSS'],
    liveUrl: 'https://yourportfolio.com',
    githubUrl: 'https://github.com/kelvinmusyoki/portfolio',
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-600/20 aspect-video">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80 flex items-center justify-center"
                  >
                    <div className="text-white text-center p-8">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">Project Preview</p>
                    </div>
                  </motion.div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="bg-white/90 text-black hover:bg-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="border-white/70 text-white hover:bg-white/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    {project.featured && (
                      <Badge variant="secondary" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs hover:bg-accent/50 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons for mobile */}
                  <div className="flex space-x-3 md:hidden">
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/kelvinmusyoki', '_blank')}
            className="px-8 py-3 text-lg font-semibold rounded-xl border-2 hover:bg-accent transition-all duration-300 transform hover:scale-105"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}