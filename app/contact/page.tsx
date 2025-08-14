'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Send, Music } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-shadow-lg">
            <span className="gradient-text text-glow">Контакты</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Свяжитесь для организации концертов, сотрудничества или просто для общения
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/2.jpg"
              alt="Евгений Соколовский за роялем"
              width={1200}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Давайте создадим что-то прекрасное вместе
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl">
                Готов к новым проектам и творческим вызовам
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-effect-strong rounded-3xl p-8 border-glow">
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary-400">
                Связаться
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-primary-500 bg-opacity-20 rounded-full">
                    <Mail className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">Email</div>
                    <a href="mailto:es-piano@mail.ru" className="text-gray-300 hover:text-primary-400 transition-colors">
                      es-piano@mail.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-primary-500 bg-opacity-20 rounded-full">
                    <Phone className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">Телефон</div>
                    <a href="tel:+79265500987" className="text-gray-300 hover:text-primary-400 transition-colors">
                      +7 (926) 550-09-87
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-primary-500 bg-opacity-20 rounded-full">
                    <MapPin className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">Местоположение</div>
                    <div className="text-gray-300">Москва, Россия</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect-strong rounded-3xl p-8 border-glow">
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary-400">
                Социальные сети
              </h2>
              
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://vk.com/evgeny_sokolovsky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-4 rounded-full hover:bg-primary-500 hover:bg-opacity-20 transition-colors duration-300 border border-primary-500 border-opacity-30"
                  title="ВКонтакте"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.27h-1.46c-.55 0-.71-.44-1.68-1.42-.86-.86-1.24-.96-1.45-.96-.31 0-.4.08-.4.52v1.31c0 .37-.12.56-.99.56-1.46 0-3.07-.89-4.16-2.55-1.1-1.66-1.38-2.91-1.38-3.4 0-.19.08-.37.26-.37h1.46c.19 0 .37.18.48.62.59 2.01 1.57 3.77 1.98 3.77.15 0 .22-.08.22-.52V9.6c-.06-.95-.55-1.03-.55-1.37 0-.18.15-.37.37-.37h2.29c.31 0 .41.15.41.52v2.77c0 .29.15.37.22.37.15 0 .26-.08.41-.22.81-.89 1.33-2.29 1.33-2.29.08-.18.26-.37.55-.37h1.46c.26 0 .33.18.26.44 0 0-.52 1.42-1.77 2.91-.19.22-.15.41-.08.67.04.15.67 1.03.67 1.03.08.18.15.37-.08.67z"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/evgeniy_sokolovskiy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-4 rounded-full hover:bg-primary-500 hover:bg-opacity-20 transition-colors duration-300 border border-primary-500 border-opacity-30"
                  title="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://soundcloud.com/evgeniy_sokolovskiy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-4 rounded-full hover:bg-primary-500 hover:bg-opacity-20 transition-colors duration-300 border border-primary-500 border-opacity-30"
                  title="SoundCloud"
                >
                  <Music className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.facebook.com/people/Evgeniy-Sokolovskiy/100064042899495/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-4 rounded-full hover:bg-primary-500 hover:bg-opacity-20 transition-colors duration-300 border border-primary-500 border-opacity-30"
                  title="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            <div className="glass-effect-strong rounded-3xl p-8 border-glow">
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary-400">
                Для сотрудничества
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Организация концертов</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Участие в фестивалях</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Создание специальных программ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Запись музыки для проектов</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Мастер-классы</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect-strong rounded-3xl p-8 border-glow"
          >
            <h2 className="text-3xl font-serif font-bold mb-8 text-primary-400">
              Написать сообщение
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black bg-opacity-50 border border-white border-opacity-20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400 focus:ring-opacity-20 transition-all duration-300"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black bg-opacity-50 border border-white border-opacity-20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400 focus:ring-opacity-20 transition-all duration-300"
                  placeholder="Введите ваш email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-black bg-opacity-50 border border-white border-opacity-20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400 focus:ring-opacity-20 transition-all duration-300 resize-none"
                  placeholder="Введите ваше сообщение"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <Send size={20} />
                Отправить сообщение
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
