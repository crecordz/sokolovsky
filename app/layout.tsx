import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

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
        <Navigation />
        {children}
      </body>
    </html>
  )
}
