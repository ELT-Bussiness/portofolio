'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ]

  const currentLang = languages.find(l => l.code === language) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="text-xl">{currentLang.flag}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">
          {currentLang.code.toUpperCase()}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as any)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                language === lang.code
                  ? 'bg-gray-100 dark:bg-gray-700'
                  : ''
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className={`text-sm ${
                language === lang.code
                  ? 'font-semibold text-gray-900 dark:text-white'
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
                {lang.label}
              </span>
              {language === lang.code && (
                <span className="ml-auto text-green-500">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
