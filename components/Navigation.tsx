'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as const

const links = [
  { href: '/', label: 'Home' },
  { href: '/collection', label: 'Collection' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-refined ${
          scrolled ? 'bg-offwhite/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(26,26,26,0.08)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-cormorant text-xl tracking-[0.35em] font-light text-charcoal hover:text-charcoal/70 transition-colors duration-300"
          >
            MAISON
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="group relative">
                <span
                  className={`font-inter text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                    pathname === href ? 'text-charcoal' : 'text-charcoal/50 hover:text-charcoal'
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-charcoal transition-all duration-300 ease-refined ${
                    pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right — cart + hamburger */}
          <div className="flex items-center gap-5">
            {/* Cart icon */}
            <button
              aria-label="Cart"
              className="hidden md:flex text-charcoal/60 hover:text-charcoal transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col gap-[5px] p-1"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease }}
                className="block h-px w-6 bg-charcoal origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-px w-6 bg-charcoal"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease }}
                className="block h-px w-6 bg-charcoal origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease }}
            className="fixed inset-0 z-40 bg-offwhite flex flex-col justify-center px-10"
          >
            <nav className="flex flex-col gap-8">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease }}
                >
                  <Link
                    href={href}
                    className={`font-cormorant text-5xl font-light tracking-wider ${
                      pathname === href ? 'text-charcoal' : 'text-charcoal/40 hover:text-charcoal'
                    } transition-colors duration-300`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-12 left-10 right-10"
            >
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-charcoal/30">
                Carrer de Provença 123, Barcelona
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
