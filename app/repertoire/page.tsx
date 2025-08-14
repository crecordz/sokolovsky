'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Repertoire() {
  const repertoireCategories = [
    {
      title: 'Авторские композиции',
      description: 'Оригинальные произведения Евгения Соколовского',
      pieces: [
        'Электронная симфония',
        'Современные аранжировки',
        'Эмоциональные композиции',
        'Произведения нового времени'
      ],
      features: [
        'Сочетание классической школы и современных технологий',
        'Мощные эмоциональные аранжировки',
        'Выход за рамки привычного восприятия'
      ]
    },
    {
      title: 'Виртуозные переложения',
      description: 'Переложения знаменитых классических произведений',
      pieces: [
        'Классические шедевры в современном звучании',
        'Адаптации для различных проектов',
        'Инновационные интерпретации'
      ],
      features: [
        'Современное прочтение классики',
        'Техническая виртуозность',
        'Эмоциональная глубина'
      ]
    },
    {
      title: 'Музыка для шоу',
      description: 'Композиции для спектаклей и торжественных церемоний',
      pieces: [
        'Церемония закрытия Кубка конфедераций FIFA 2017',
        'Международные кинофестивали',
        'Ледовые шоу',
        'Спортивные мероприятия'
      ],
      features: [
        'Специально созданные композиции',
        'Адаптация под конкретные проекты',
        'Высокое качество исполнения'
      ]
    },
    {
      title: 'Конкурсные произведения',
      description: 'Музыка, исполняемая на международных конкурсах',
      pieces: [
        'Произведения для молодых исполнителей',
        'Конкурсные программы',
        'Популярные среди победителей'
      ],
      features: [
        'Высокие технические требования',
        'Эмоциональная выразительность',
        'Признание в музыкальном сообществе'
      ]
    },
    {
      title: 'Электронная симфония',
      description: 'Современные аранжировки с электронными элементами',
      pieces: [
        'Соединение рояля с электроникой',
        'Современные технологии',
        'Инновационные звуковые решения'
      ],
      features: [
        'Уникальное звучание',
        'Современные технологии',
        'Экспериментальный подход'
      ]
    },
    {
      title: 'Эмоциональные композиции',
      description: 'Музыка, затрагивающая глубинные струны души',
      pieces: [
        'Ностальгические мотивы',
        'Триумф добра',
        'Водоворот жизни',
        'Вечные ценности'
      ],
      features: [
        'Глубокий эмоциональный посыл',
        'Философское содержание',
        'Вневременная актуальность'
      ]
    }
  ]

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
            <span className="gradient-text text-glow">Репертуар</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Авторские композиции и виртуозные переложения, создающие настоящую электронную симфонию
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/5.jpg"
              alt="Евгений Соколовский за роялем"
              width={1200}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Музыка, которая трогает душу
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl">
                Каждое произведение — это история, эмоция, момент жизни, 
                запечатленный в звуках рояля
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repertoireCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect-strong rounded-3xl p-8 hover-lift card-hover border-glow"
            >
              <h3 className="text-2xl font-serif font-bold mb-6 text-primary-400">
                {category.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {category.description}
              </p>
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Произведения:</h4>
                <div className="space-y-2">
                  {category.pieces.map((piece, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                      <span>{piece}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Особенности:</h4>
                <div className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 bg-opacity-50 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="glass-effect-strong rounded-3xl p-10 max-w-3xl mx-auto border-glow">
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary-400">
              Специальные программы
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Евгений Соколовский создает специальные концертные программы 
              по запросу организаторов и может адаптировать репертуар под 
              конкретные мероприятия и аудиторию.
            </p>
            <p className="text-sm text-gray-400">
              Для получения полного списка произведений и обсуждения 
              специальных программ свяжитесь через раздел контактов.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
