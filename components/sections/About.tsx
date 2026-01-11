'use client'

import { portfolioData } from '@/data/portfolio'
import { useLanguage } from '@/contexts/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const { about } = portfolioData

  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        {/* IT BERRIES style section */}
        <div className="space-y-8 md:space-y-12">
          <div className="border-t border-b border-gray-700 dark:border-gray-800 py-4 md:py-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-center">
              {t({ en: 'ABOUT ME', fr: 'À PROPOS', de: 'ÜBER MICH', es: 'SOBRE MÍ', zh: '关于我' })}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto px-2 sm:px-4">
            <p className="text-base md:text-lg leading-relaxed text-gray-300 dark:text-gray-400 text-center md:text-left">
              {t(about)}
            </p>

            <div className="flex justify-center mt-8 md:mt-12">
              <button className="group relative px-6 md:px-8 py-2.5 md:py-3 overflow-hidden border-2 border-white dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
                <span className="relative z-10 font-medium tracking-wider">
                  {t({ en: 'READ MORE', fr: 'LIRE PLUS', de: 'MEHR LESEN', es: 'LEER MÁS', zh: '阅读更多' })}
                </span>
                <div className="absolute inset-0 bg-white dark:bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium tracking-wider">
                  {t({ en: 'READ MORE', fr: 'LIRE PLUS', de: 'MEHR LESEN', es: 'LEER MÁS', zh: '阅读更多' })}
                </span>
              </button>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="flex justify-center items-center gap-4 mt-16">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gray-600"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rotate-45 border border-gray-600"></div>
              <div className="w-2 h-2 rotate-45 border border-gray-600"></div>
              <div className="w-2 h-2 rotate-45 border border-gray-600"></div>
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
