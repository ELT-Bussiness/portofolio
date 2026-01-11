'use client'

import { portfolioData } from '@/data/portfolio'
import { useLanguage } from '@/contexts/LanguageContext'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export function Education() {
  const { t } = useLanguage()
  const { education, certifications } = portfolioData

  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {t({ en: 'Education', fr: 'Formation', de: 'Ausbildung', es: 'Educación', zh: '教育' })}
        </h2>

        {/* Education */}
        <div className="space-y-6 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t(edu.degree)}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{edu.school}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {t({ en: 'Certifications', fr: 'Certifications', de: 'Zertifizierungen', es: 'Certificaciones', zh: '证书' })}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h4>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
