'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/2.jpg"
            alt="Евгений Соколовский за роялем"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black bg-opacity-95 to-black bg-opacity-90 z-10"></div>
          <div className="absolute inset-0 bg-gradient-radial from-primary-400 to-transparent opacity-10 z-20"></div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto container-padding py-16">
          <div className="text-center">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-shadow-lg">
                <span className="gradient-text text-glow">Евгений</span>
                <br />
                <span className="text-white">Соколовский</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
                Композитор, пианист, виртуоз
              </p>
              <p className="text-lg md:text-xl text-primary-400 font-medium">
                Классик XXI века
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Многократный лауреат международных фортепианных конкурсов и фестивалей. 
                Его музыка задевает самые глубинные струны души и заставляет её трепетать, 
                гармонии произведений обволакивают сознание, возвращают в него что-то нетленное, 
                настоящее, вечное.
              </p>
            </motion.div>

            {/* Navigation Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
            >
              <Link href="/about" className="block">
                <div className="glass-effect-strong rounded-3xl p-8 hover-lift card-hover border-glow">
                  <h3 className="text-xl font-serif font-bold mb-3 text-primary-400">
                    О пианисте
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Биография, достижения и творческий путь классика XXI века
                  </p>
                </div>
              </Link>

              <Link href="/repertoire" className="block">
                <div className="glass-effect-strong rounded-3xl p-8 hover-lift card-hover border-glow">
                  <h3 className="text-xl font-serif font-bold mb-3 text-primary-400">
                    Репертуар
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Авторские композиции и виртуозные переложения классических произведений
                  </p>
                </div>
              </Link>

              <Link href="/concerts" className="block">
                <div className="glass-effect-strong rounded-3xl p-8 hover-lift card-hover border-glow">
                  <h3 className="text-xl font-serif font-bold mb-3 text-primary-400">
                    Проекты
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Расписание выступлений и участие в международных фестивалях
                  </p>
                </div>
              </Link>

              <Link href="/contact" className="block">
                <div className="glass-effect-strong rounded-3xl p-8 hover-lift card-hover border-glow">
                  <h3 className="text-xl font-serif font-bold mb-3 text-primary-400">
                    Контакты
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Свяжитесь для организации концертов и сотрудничества
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Featured Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-20"
            >
              <div className="glass-effect-strong rounded-3xl p-8 max-w-5xl mx-auto border-glow">
                <h2 className="text-3xl font-serif font-bold mb-8 text-center text-primary-400">
                  Избранные проекты
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Церемония закрытия Кубка конфедераций FIFA 2017</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Международный кинофестиваль «Евразийский Мост»</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Шоу Алексея Немова «Легенды спорта 1996-2016»</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>37-й Московский Международный Кинофестиваль</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Фестиваль искусств «Славянский Базар»</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Ледовое шоу Ильи Авербуха «Мы Чемпионы»</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500 bg-opacity-10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-400 bg-opacity-5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary-600 bg-opacity-10 rounded-full blur-lg animate-pulse-slow"></div>
      </div>
    </div>
  )
}
