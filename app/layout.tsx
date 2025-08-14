import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Image from 'next/image'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Евгений Соколовский - Пианист',
  description: 'Официальный сайт пианиста Евгения Соколовского',
  keywords: 'пианист, классическая музыка, концерты, фортепиано, Евгений Соколовский',
  authors: [{ name: 'Евгений Соколовский' }],
  openGraph: {
    title: 'Евгений Соколовский - Пианист',
    description: 'Официальный сайт пианиста Евгения Соколовского',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {/* Global fixed background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/5.jpg"
            alt="Фон"
            fill
            priority
            className="object-cover blur-sm scale-105 grayscale"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-white/15"></div>
        </div>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
