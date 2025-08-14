'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Music, Award, Globe } from 'lucide-react'
import Image from 'next/image'

export default function Concerts() {
  const upcomingEvents = [
    {
      title: 'Международный фестиваль классической музыки',
      date: '15 декабря 2024',
      location: 'Москва, Большой зал консерватории',
      description: 'Сольный концерт с программой авторских композиций',
      type: 'Сольный концерт'
    },
    {
      title: 'Фестиваль современной музыки',
      date: '22 января 2025',
      location: 'Санкт-Петербург, Мариинский театр',
      description: 'Премьера новой электронной симфонии',
      type: 'Премьера'
    },
    {
      title: 'Международный конкурс пианистов',
      date: '10 февраля 2025',
      location: 'Пекин, Национальный центр исполнительских искусств',
      description: 'Участие в жюри международного конкурса',
      type: 'Жюри'
    }
  ]

  const pastEvents = [
    {
      title: 'Церемония закрытия Кубка конфедераций FIFA 2017',
      date: '2 июля 2017',
      location: 'Санкт-Петербург, Стадион «Крестовский»',
      description: 'Специально созданная композиция для торжественной церемонии',
      type: 'Специальный проект'
    },
    {
      title: 'Международный кинофестиваль «Евразийский Мост»',
      date: '15 сентября 2023',
      location: 'Калининград, Дом кино',
      description: 'Музыкальное сопровождение церемонии награждения',
      type: 'Музыкальное сопровождение'
    },
    {
      title: 'Шоу Алексея Немова «Легенды спорта 1996-2016»',
      date: '20 октября 2023',
      location: 'Москва, ВТБ Арена',
      description: 'Создание музыкального оформления для спортивного шоу',
      type: 'Музыкальное оформление'
    },
    {
      title: '37-й Московский Международный Кинофестиваль',
      date: '25 июня 2023',
      location: 'Москва, Дом кино',
      description: 'Композиция для открытия фестиваля',
      type: 'Фестивальная музыка'
    },
    {
      title: 'Фестиваль искусств «Славянский Базар»',
      date: '12 июля 2023',
      location: 'Витебск, Летний амфитеатр',
      description: 'Сольное выступление с программой классических произведений',
      type: 'Сольный концерт'
    },
    {
      title: 'Ледовое шоу Ильи Авербуха «Мы Чемпионы»',
      date: '8 марта 2023',
      location: 'Москва, Ледовый дворец',
      description: 'Специально созданная музыка для ледового шоу',
      type: 'Специальный проект'
    }
  ]

  return (
    <div className="min-h-screen text-slate-100 pt-20">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
            <span className="gradient-text">Проекты</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto">
            Расписание выступлений и участие в международных фестивалях
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
              src="/images/1.jpg"
              alt="Евгений Соколовский на сцене"
              width={1200}
              height={400}
              className="w-full h-64 md:h-96 object-cover grayscale"
            />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mb-4">
                Музыка объединяет мир
              </h2>
              <p className="text-lg text-slate-200 max-w-2xl">
                От торжественных церемоний до интимных концертов — 
                каждое выступление становится незабываемым событием
              </p>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">
            <span className="gradient-text">Ближайшие выступления</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect-strong rounded-3xl p-8 hover-lift card-hover border-glow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-500 bg-opacity-20 rounded-full">
                    <Calendar className="text-primary-600" size={20} />
                  </div>
                  <span className="text-sm font-medium text-primary-600">{event.type}</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-slate-900">
                  {event.title}
                </h3>
                <div className="space-y-3 text-gray-700 mb-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-gray-500" size={16} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-gray-500" size={16} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Past Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">
            <span className="gradient-text">Избранные проекты</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect-strong rounded-3xl p-8 hover-lift card-hover border-glow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-500 bg-opacity-20 rounded-full">
                    <Award className="text-primary-600" size={20} />
                  </div>
                  <span className="text-sm font-medium text-primary-600">{event.type}</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-slate-900">
                  {event.title}
                </h3>
                <div className="space-y-3 text-gray-700 mb-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-gray-500" size={16} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-gray-500" size={16} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaboration Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-effect-strong rounded-3xl p-10 border-glow">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-primary-600">
              Сотрудничество
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-900">Организация концертов</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Евгений Соколовский открыт для сотрудничества с концертными залами, 
                  фестивалями и организаторами мероприятий. Возможна организация 
                  как сольных концертов, так и участие в совместных проектах.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Сольные концерты</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Участие в фестивалях</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Специальные проекты</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-900">Специальные программы</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Создание уникальных музыкальных программ под конкретные мероприятия, 
                  включая торжественные церемонии, спортивные события, 
                  кинофестивали и другие культурные проекты.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Торжественные церемонии</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Спортивные мероприятия</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Культурные проекты</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Для обсуждения возможностей сотрудничества свяжитесь через раздел контактов
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
