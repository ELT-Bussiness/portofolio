'use client'

import { portfolioData } from '@/data/portfolio'
import { useLanguage } from '@/contexts/LanguageContext'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

export function Experience() {
  const { t, tArray } = useLanguage()
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {t({ en: 'Experience', fr: 'Expérience', de: 'Erfahrung', es: 'Experiencia', zh: '经验' })}
        </h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900"></div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t(exp.title)}
                </h3>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {tArray(exp.description).map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
