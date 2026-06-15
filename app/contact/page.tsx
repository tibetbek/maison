'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

const ease = [0.25, 0.1, 0.25, 1] as const

const hours = [
  { day: 'Monday – Friday', time: '10:00 – 19:00' },
  { day: 'Saturday', time: '11:00 – 18:00' },
  { day: 'Sunday', time: 'Closed' },
]

const inputClass =
  'w-full border-b border-charcoal/20 bg-transparent py-3 font-inter text-sm text-charcoal placeholder:text-charcoal/30 focus:border-charcoal transition-colors duration-300 outline-none'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease }}
      className="pt-32 md:pt-40"
    >
      {/* ── HEADER ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
        >
          <span className="block font-inter text-[9px] tracking-[0.45em] uppercase text-charcoal/30 mb-5">
            Reach us
          </span>
          <h1 className="font-cormorant text-[clamp(3rem,8vw,9rem)] font-light leading-none text-charcoal">
            Get in touch.
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-8 h-px bg-charcoal/10 origin-left"
        />
      </div>

      {/* ── TWO COLUMNS ────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">

          {/* Left — address + hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="space-y-12"
          >
            {/* Address */}
            <div>
              <span className="block font-inter text-[9px] tracking-[0.4em] uppercase text-charcoal/30 mb-6">
                Boutique
              </span>
              <address className="not-italic">
                <p className="font-cormorant text-2xl font-light text-charcoal leading-relaxed">
                  Carrer de Provença 123<br />
                  08037 Barcelona<br />
                  Spain
                </p>
              </address>
              <div className="mt-6 space-y-2">
                <a
                  href="tel:+34930001234"
                  className="block font-inter text-xs text-charcoal/50 hover:text-charcoal transition-colors duration-300"
                >
                  +34 930 001 234
                </a>
                <a
                  href="mailto:hello@maison.es"
                  className="block font-inter text-xs text-charcoal/50 hover:text-charcoal transition-colors duration-300"
                >
                  hello@maison.es
                </a>
              </div>
            </div>

            {/* Hours */}
            <div>
              <span className="block font-inter text-[9px] tracking-[0.4em] uppercase text-charcoal/30 mb-6">
                Store Hours
              </span>
              <div className="space-y-4">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between gap-8 border-b border-charcoal/8 pb-4">
                    <span className="font-inter text-xs text-charcoal/60">{day}</span>
                    <span className="font-inter text-xs text-charcoal/40">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="aspect-[4/3] overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, #E8E2D8 0%, #D5CCBF 50%, #C8C2B8 100%)',
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-cormorant italic text-sm text-charcoal/25 tracking-wider">
                  Carrer de Provença, Barcelona
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
          >
            <span className="block font-inter text-[9px] tracking-[0.4em] uppercase text-charcoal/30 mb-8">
              Send a message
            </span>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="py-16"
              >
                <div className="w-6 h-px bg-gold mb-8" />
                <p className="font-cormorant italic text-3xl text-charcoal/70 leading-relaxed">
                  Thank you. We will be<br />in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-4 font-inter text-[10px] tracking-[0.3em] uppercase text-charcoal hover:text-charcoal/60 transition-colors duration-300 group"
                  >
                    Send message
                    <span className="h-px bg-charcoal w-8 group-hover:w-14 transition-[width] duration-500 ease-refined" />
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </motion.main>
  )
}
