'use client'

import { MessageCircle } from 'lucide-react'

const whatsappUrl =
  'https://wa.me/254757277524?text=Hi%20Kelvin%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.'

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
      <span className="rounded-full border border-border/50 bg-background/95 px-3 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur-sm sm:px-4 sm:text-sm">
        Need help?
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Kelvin on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-14 sm:w-14"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  )
}
