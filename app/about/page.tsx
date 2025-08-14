'use client'

import { motion } from 'framer-motion'
import { Award, Music, GraduationCap, Globe } from 'lucide-react'
import Image from 'next/image'

export default function About() {
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
            <span className="gradient-text">О</span> <span className="gradient-text">пианисте</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto">
            Евгений Соколовский — композитор, пианист, виртуоз, классик XXI века
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect-strong rounded-3xl p-10 border-glow text-slate-900">
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary-300">
                Биография
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Евгений Соколовский — многократный лауреат международных фортепианных конкурсов и фестивалей. 
                  Окончил Российскую академию музыки имени Гнесиных.
                </p>
                <p className="text-lg">
                  Член Российского Музыкального Союза и Российского Авторского Общества. 
                  Его музыка задевает самые глубинные струны души и заставляет её трепетать.
                </p>
                <p className="text-lg">
                  Фортепианная музыка нового времени легко выходит за рамки привычного восприятия, 
                  в ней звуки рояля соединяются с мощными, эмоциональными, современными аранжировками, 
                  создающими настоящую электронную симфонию и буйство чувств.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/3.jpg"
                alt="Евгений Соколовский за роялем"
                width={600}
                height={400}
                className="w-full h-auto object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">
            <span className="gradient-text">Образование и членство</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect-strong rounded-3xl p-8 text-center card-hover border-glow text-slate-900">
              <div className="p-4 bg-primary-500 bg-opacity-20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Российская академия музыки имени Гнесиных</h3>
              <p className="text-gray-700">Высшее музыкальное образование</p>
            </div>
            <div className="glass-effect-strong rounded-3xl p-8 text-center card-hover border-glow text-slate-900">
              <div className="p-4 bg-primary-500 bg-opacity-20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Российский Музыкальный Союз</h3>
              <p className="text-gray-700">Членство в профессиональной организации</p>
            </div>
            <div className="glass-effect-strong rounded-3xl p-8 text-center card-hover border-glow text-slate-900">
              <div className="p-4 bg-primary-500 bg-opacity-20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Music className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Российское Авторское Общество</h3>
              <p className="text-gray-700">Защита авторских прав композитора</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/5.jpg"
                alt="Евгений Соколовский на сцене"
                width={600}
                height={400}
                className="w-full h-auto object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="glass-effect-strong rounded-3xl p-10 border-glow">
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary-600">
                Достижения
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Лауреат международных фортепианных конкурсов</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>1 место на конкурсе в Пекине «2nd Silk Road & Young Dreams» (2019)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Лучший исполнитель и лучший оригинальный номер</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Участие в престижных международных фестивалях</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">
            <span className="gradient-text">Международное признание</span>
          </h2>
          <div className="glass-effect-strong rounded-3xl p-10 border-glow">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary-600">География выступлений</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Благодаря своему высокому профессионализму и эмоциональности выступлений 
                  Евгений Соколовский покорил не только российских слушателей. 
                  Его музыку знают и любят в Европе и Азии.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Россия</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Европа</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Азия</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Международные фестивали</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary-600">Классик современности</h3>
                <p className="text-gray-700 leading-relaxed">
                  Произведения Евгения Соколовского звучат на различных конкурсах 
                  в исполнении молодого поколения и пользуются неизменной популярностью победителей. 
                  Именно поэтому Евгений Соколовский является классиком современности.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
