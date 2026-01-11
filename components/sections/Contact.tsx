'use client'

import { portfolioData } from '@/data/portfolio'
import { useLanguage } from '@/contexts/LanguageContext'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const { t } = useLanguage()
  const { personal } = portfolioData
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:${personal.email}?subject=Contact from Portfolio&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-12 md:py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block border-2 md:border-4 border-gray-900 dark:border-white px-6 sm:px-8 md:px-12 py-3 md:py-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-gray-900 dark:text-white">
              {t({ en: 'CONTACT', fr: 'CONTACT', de: 'KONTAKT', es: 'CONTACTO', zh: '联系方式' })}
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 md:mb-12 px-4">
            {t({
              en: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
              fr: "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités de faire partie de votre vision.",
              de: "Ich bin immer offen für neue Projekte, kreative Ideen oder Möglichkeiten, Teil Ihrer Vision zu werden.",
              es: "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades de ser parte de tu visión.",
              zh: "我始终乐于讨论新项目、创意想法或成为您愿景一部分的机会。"
            })}
          </p>

          {/* Decorative divider */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rotate-45 border border-gray-400 dark:border-gray-600"></div>
              <div className="w-2 h-2 rotate-45 border border-gray-400 dark:border-gray-600"></div>
              <div className="w-2 h-2 rotate-45 border border-gray-400 dark:border-gray-600"></div>
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800">
                  <Mail className="w-6 h-6 text-gray-900 dark:text-white" />
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Email</div>
                    <a href={`mailto:${personal.email}`} className="font-medium text-gray-900 dark:text-white hover:underline">
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800">
                  <Phone className="w-6 h-6 text-gray-900 dark:text-white" />
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Phone</div>
                    <a href={`tel:${personal.phone}`} className="font-medium text-gray-900 dark:text-white hover:underline">
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800">
                  <MapPin className="w-6 h-6 text-gray-900 dark:text-white" />
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Location</div>
                    <div className="font-medium text-gray-900 dark:text-white">{personal.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white outline-none transition-colors"
                  placeholder={t({ en: 'Your name', fr: 'Votre nom', de: 'Ihr Name', es: 'Tu nombre', zh: '您的姓名' })}
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white outline-none transition-colors"
                  placeholder="Email"
                />
              </div>

              <div>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white outline-none transition-colors resize-none"
                  placeholder="Message"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>{t({ en: 'SEND MESSAGE', fr: 'ENVOYER', de: 'NACHRICHT SENDEN', es: 'ENVIAR MENSAJE', zh: '发送消息' })}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
