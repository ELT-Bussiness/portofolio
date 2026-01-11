'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: { en: 'About me', fr: 'À propos', de: 'Über mich', es: 'Sobre mí', zh: '关于我' }, href: '#about' },
    { label: { en: 'Skills', fr: 'Compétences', de: 'Fähigkeiten', es: 'Habilidades', zh: '技能' }, href: '#skills' },
    { label: { en: 'Portfolio', fr: 'Portfolio', de: 'Portfolio', es: 'Portafolio', zh: '作品集' }, href: '#projects' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black dark:bg-gray-950 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-12 h-12 bg-white dark:bg-gray-800 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-black dark:text-white font-bold text-xl">ELT</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors uppercase tracking-wide"
              >
                {t(item.label)}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-200 transition-colors uppercase tracking-wide"
            >
              {t({ en: 'Contact Me', fr: 'Me Contacter', de: 'Kontakt', es: 'Contáctame', zh: '联系我' })}
            </a>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden xs:block sm:block">
              <LanguageToggle />
            </div>
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {/* Language toggle for very small screens */}
            <div className="px-4 py-2 sm:hidden">
              <LanguageToggle />
            </div>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors uppercase tracking-wide"
              >
                {t(item.label)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium bg-white text-black hover:bg-gray-200 transition-colors uppercase tracking-wide text-center"
            >
              {t({ en: 'Contact Me', fr: 'Me Contacter', de: 'Kontakt', es: 'Contáctame', zh: '联系我' })}
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
