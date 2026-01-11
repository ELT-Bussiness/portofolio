'use client'

import { portfolioData } from '@/data/portfolio'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

export function Projects() {
  const { t } = useLanguage()
  const { projects } = portfolioData
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'ai'>('all')

  const categories = [
    { key: 'all' as const, label: { en: 'ALL', fr: 'TOUT', de: 'ALLE', es: 'TODO', zh: '全部' } },
    { key: 'web' as const, label: { en: 'WEB', fr: 'WEB', de: 'WEB', es: 'WEB', zh: '网站' } },
    { key: 'mobile' as const, label: { en: 'MOBILE', fr: 'MOBILE', de: 'MOBIL', es: 'MÓVIL', zh: '移动' } },
    { key: 'ai' as const, label: { en: 'AI/ML', fr: 'IA/ML', de: 'KI/ML', es: 'IA/ML', zh: '人工智能' } },
  ]

  return (
    <section id="projects" className="relative py-20 px-4 bg-gray-100 dark:bg-gray-950">
      {/* Background image effect (optional) */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-5 bg-cover bg-center"
        style={{ backgroundImage: 'url(/mountain-bg.jpg)' }}
      />

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block border-4 border-gray-900 dark:border-white px-12 py-4 bg-gray-100 dark:bg-gray-950">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-gray-900 dark:text-white">
              {t({ en: 'PORTFOLIO', fr: 'PORTFOLIO', de: 'PORTFOLIO', es: 'PORTAFOLIO', zh: '作品集' })}
            </h2>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-2 font-medium tracking-wider transition-all duration-300 ${
                filter === category.key
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {t(category.label)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.slice(0, 6).map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gray-900 dark:bg-gray-800 aspect-square cursor-pointer"
            >
              {/* Project image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-80"></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.organization}
                </p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-white text-gray-900 font-medium hover:bg-gray-200 transition-colors">
                    {t({ en: 'DEMO', fr: 'DÉMO', de: 'DEMO', es: 'DEMO', zh: '演示' })}
                  </button>
                  <button className="px-4 py-2 border-2 border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-colors">
                    {t({ en: 'MORE', fr: 'PLUS', de: 'MEHR', es: 'MÁS', zh: '更多' })}
                  </button>
                </div>
              </div>

              {/* Project number/label */}
              <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 px-3 py-1 text-sm font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center">
          <p className="text-xl font-medium text-gray-900 dark:text-white mb-6">
            {t({ en: 'And many more to come!', fr: 'Et bien d\'autres à venir!', de: 'Und viele mehr kommen noch!', es: '¡Y muchos más por venir!', zh: '还有更多即将推出！' })}
          </p>
          <button className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300">
            {t({ en: 'EXPLORE', fr: 'EXPLORER', de: 'ERKUNDEN', es: 'EXPLORAR', zh: '探索' })}
          </button>
        </div>
      </div>
    </section>
  )
}
