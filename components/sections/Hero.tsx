'use client'

import { portfolioData } from '@/data/portfolio'
import { useLanguage } from '@/contexts/LanguageContext'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  const { t } = useLanguage()
  const { personal } = portfolioData

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Split diagonal background */}
      <div className="absolute inset-0 flex">
        {/* Left side - Light gray */}
        <div className="w-1/2 bg-gray-100 dark:bg-gray-900" />
        
        {/* Right side - Black */}
        <div className="w-1/2 bg-black dark:bg-gray-950" />
        
        {/* Diagonal divider */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black dark:bg-gray-950 origin-top-right"
            style={{
              clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 50% 100%)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="space-y-6 text-gray-900 dark:text-gray-100">
            <div className="space-y-4">
              <p className="text-lg font-light tracking-wide">
                {t({ en: 'Hi, I am', fr: 'Bonjour, je suis', de: 'Hallo, ich bin', es: 'Hola, soy', zh: '你好，我是' })}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {personal.name.split(' ').pop()}
                <br />
                <span className="text-gray-600 dark:text-gray-400">
                  {personal.name.split(' ').slice(0, -1).join(' ')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {t(personal.title)}
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-6">
              <a
                href={`mailto:${personal.email}`}
                className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] overflow-hidden">
                {/* Profile Photo */}
                <img 
                  src="/profil.png" 
                  alt={personal.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
