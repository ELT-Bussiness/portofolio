'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'fr' | 'de' | 'es' | 'zh'

type TranslatedText = {
  en: string
  fr?: string
  de?: string
  es?: string
  zh?: string
}

type TranslatedArray = {
  en: string[]
  fr?: string[]
  de?: string[]
  es?: string[]
  zh?: string[]
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (text: TranslatedText) => string
  tArray: (text: TranslatedArray) => string[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (text: TranslatedText) => {
    if (text[language]) return text[language] as string
    // fallback order: en > fr > de > es > zh
    return text.en || text.fr || text.de || text.es || text.zh || ''
  }

  const tArray = (text: TranslatedArray) => {
    if (text[language]) return text[language] as string[]
    // fallback order: en > fr > de > es > zh
    return text.en || text.fr || text.de || text.es || text.zh || []
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
