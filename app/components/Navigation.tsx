'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О пианисте' },
    { href: '/repertoire', label: 'Репертуар' },
    { href: '/concerts', label: 'Проекты' },
    { href: '/contact', label: 'Контакты' }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center group">
              <Image src="/eslogo.png" alt="ES Logo" width={192} height={192} className="rounded-sm" />
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full transition-none font-medium whitespace-nowrap ${
                    pathname === item.href 
                      ? 'text-white bg-primary-500 bg-opacity-20' 
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
className="text-slate-100 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  // Иконка "крестик"
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Иконка "бургер"
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white bg-opacity-95 px-6 py-4 space-y-4 border-t border-gray-200"
        >
          {navItems.map(item => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 px-4 rounded-lg whitespace-nowrap ${
                pathname === item.href 
                  ? 'text-white bg-primary-500 bg-opacity-20' 
                  : 'text-gray-700 hover:text-black hover:bg-black hover:bg-opacity-5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}
