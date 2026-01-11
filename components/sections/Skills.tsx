'use client'

import { portfolioData } from '@/data/portfolio'
import { useLanguage } from '@/contexts/LanguageContext'

export function Skills() {
  const { t } = useLanguage()

  // Tech stack with icons (you'll need to add actual icon images or use a library)
  const techStack = [
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Python', color: '#3776AB' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'TailwindCSS', color: '#06B6D4' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Java', color: '#007396' },
    { name: 'Spring Boot', color: '#6DB33F' },
    { name: 'Django', color: '#092E20' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Git', color: '#F05032' },
    { name: 'Docker', color: '#2496ED' },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block border-4 border-gray-900 dark:border-white px-12 py-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-gray-900 dark:text-white">
              {t({ en: 'SKILLS', fr: 'COMPÉTENCES', de: 'FÄHIGKEITEN', es: 'HABILIDADES', zh: '技能' })}
            </h2>
          </div>
        </div>

        {/* USING NOW Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-wider">
            {t({ en: 'USING NOW:', fr: 'UTILISE ACTUELLEMENT:', de: 'VERWENDE JETZT:', es: 'USANDO AHORA:', zh: '目前使用:' })}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-3 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all hover:-translate-y-2 duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold text-white"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Services/Categories */}
        <div className="mt-20">
          <div className="flex justify-center items-center gap-4 mb-12">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rotate-45 border border-gray-400 dark:border-gray-600"></div>
              <div className="w-2 h-2 rotate-45 border border-gray-400 dark:border-gray-600"></div>
              <div className="w-2 h-2 rotate-45 border border-gray-400 dark:border-gray-600"></div>
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wider">
                {t({ en: 'DESIGN', fr: 'DESIGN', de: 'DESIGN', es: 'DISEÑO', zh: '设计' })}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t({ 
                  en: 'I can design the site based on your needs and suggestions. I can also design the site from scratch consulting with you', 
                  fr: 'Je peux concevoir le site en fonction de vos besoins et suggestions. Je peux également concevoir le site à partir de zéro en vous consultant',
                  de: 'Ich kann die Website nach Ihren Bedürfnissen und Vorschlägen gestalten. Ich kann auch die Website von Grund auf in Absprache mit Ihnen entwerfen',
                  es: 'Puedo diseñar el sitio según tus necesidades y sugerencias. También puedo diseñar el sitio desde cero consultándote',
                  zh: '我可以根据您的需求和建议设计网站。我也可以与您协商从头设计网站'
                })}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wider">
                {t({ en: 'DEVELOPMENT', fr: 'DÉVELOPPEMENT', de: 'ENTWICKLUNG', es: 'DESARROLLO', zh: '开发' })}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t({ 
                  en: 'I can develop the site based on your needs using modern technologies and best practices for optimal performance', 
                  fr: 'Je peux développer le site en fonction de vos besoins en utilisant des technologies modernes et les meilleures pratiques pour des performances optimales',
                  de: 'Ich kann die Website nach Ihren Bedürfnissen mit modernen Technologien und Best Practices für optimale Leistung entwickeln',
                  es: 'Puedo desarrollar el sitio según tus necesidades usando tecnologías modernas y mejores prácticas para un rendimiento óptimo',
                  zh: '我可以根据您的需求使用现代技术和最佳实践开发网站，以获得最佳性能'
                })}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wider">
                {t({ en: 'MAINTENANCE', fr: 'MAINTENANCE' })}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t({ 
                  en: 'I can maintain the site and fix bugs. I can also add new features and improve existing ones as needed', 
                  fr: 'Je peux maintenir le site et corriger les bugs. Je peux également ajouter de nouvelles fonctionnalités et améliorer celles existantes selon les besoins' 
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
