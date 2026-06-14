'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Github, Linkedin, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const emailAddress = 'kelvincharlow78@gmail.com'

const socialLinks = [
  {
    name: 'Email',
    detail: emailAddress,
    icon: Mail,
    url: `mailto:${emailAddress}`,
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'GitHub',
    detail: 'github.com/kelvincharlow',
    icon: Github,
    url: 'https://github.com/kelvincharlow',
    color: 'from-gray-700 to-gray-900',
  },
  {
    name: 'LinkedIn',
    detail: 'linkedin.com/in/kelvinmusyoki',
    icon: Linkedin,
    url: 'https://linkedin.com/in/kelvinmusyoki',
    color: 'from-blue-600 to-blue-800',
  },
]

const contactDetails = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Available for remote projects',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Usually within 24 hours',
  },
  {
    icon: MessageCircle,
    label: 'Best for',
    value: 'Web apps, automation, and collaborations',
  },
]

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Message Sent!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project, collaboration, or idea in mind? Send a message and let's talk through it.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {contactDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 bg-card/50 py-0 backdrop-blur-sm">
                  <CardContent className="flex h-full items-start gap-4 p-4 sm:p-5">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{detail.label}</p>
                      <p className="text-sm text-muted-foreground leading-snug">{detail.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-border/50 bg-card/50 py-0 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)]">
                <div className="bg-muted/30 p-5 sm:p-8 lg:border-r lg:border-border/50">
                  <div className="w-12 h-12 mb-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500 mb-3">
                    Open to new work
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight text-foreground mb-4">
                    Let's build something useful.
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I help turn ideas into reliable web experiences, automation tools, and production-ready features.
                  </p>
                </div>

                <div className="p-5 sm:p-8">
                  <div className="mb-6">
                    <CardTitle className="flex items-center text-xl sm:text-2xl">
                      <MessageCircle className="mr-2 h-5 w-5 text-indigo-500" />
                      Send a message
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Share a few details and I'll reply with next steps.
                    </CardDescription>
                  </div>

                  <form
                    action="https://formspree.io/f/xnnodkgw"
                    method="POST"
                    className="space-y-5"
                    target="_blank"
                    onSubmit={() => {
                      console.log('Form submitting...')
                      setTimeout(() => setIsSubmitted(true), 2000)
                    }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Your name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Project details
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me what you want to build, improve, or automate."
                        rows={5}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <input type="hidden" name="_subject" value="New message from Portfolio Contact Form" />
                    <input type="hidden" name="_next" value="https://portfolio-ege9wo8ul-kelvins-projects-e3a5059b.vercel.app/?success=true" />

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-8 sm:w-auto"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                      <p className="min-w-0 text-sm text-muted-foreground">
                        Or email{' '}
                        <a href={`mailto:${emailAddress}`} className="break-all font-medium text-foreground hover:text-indigo-500 transition-colors">
                          {emailAddress}
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                onClick={() => window.open(link.url, '_blank')}
                className="justify-start p-4 h-auto min-w-0 border-border/50 bg-card/50 hover:bg-accent/50 group"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-r ${link.color} mr-3 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="h-4 w-4 text-white" />
                </div>
                <div className="min-w-0 text-left">
                  <div className="font-semibold text-foreground">{link.name}</div>
                  <div className="truncate text-sm text-muted-foreground">
                    {link.detail}
                  </div>
                </div>
              </Button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
