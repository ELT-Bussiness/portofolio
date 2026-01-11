'use client'

import { portfolioData } from '@/data/portfolio'
import { useLanguage } from '@/contexts/LanguageContext'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()
  const { personal } = portfolioData

  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-white dark:bg-gray-800 flex items-center justify-center">
              <span className="text-black dark:text-white font-bold text-2xl">ELT</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a
              href={`mailto:${personal.email}`}
              className="p-3 bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Decorative divider */}
          <div className="flex justify-center items-center gap-4 py-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gray-600"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rotate-45 border border-gray-600"></div>
              <div className="w-2 h-2 rotate-45 border border-gray-600"></div>
              <div className="w-2 h-2 rotate-45 border border-gray-600"></div>
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm space-y-2">
            <p>© {new Date().getFullYear()} {personal.name}</p>
            <p className="italic">"{t(personal.philosophy)}"</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
