'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

const ease = [0.25, 0.1, 0.25, 1] as const

const values = [
  {
    title: 'Craftsmanship',
    body: 'Every stitch is placed with intention. We work exclusively with ateliers who have practised their craft for generations, in Lisbon, Florence, and Lyon.',
  },
  {
    title: 'Sustainability',
    body: 'Natural fibres only. Certified traceable supply chains. Timeless cuts that resist the cycle of trends — the most sustainable garment is one you wear for twenty years.',
  },
  {
    title: 'Timelessness',
    body: 'We do not follow seasons. We follow a singular vision: clothing that accumulates meaning as it ages, that fits better the more it is worn.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.9, ease },
  }),
}

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease }}
      className="pt-32 md:pt-40"
    >
      {/* ── PULL QUOTE ──────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease }}
        >
          <span className="block font-inter text-[9px] tracking-[0.45em] uppercase text-charcoal/30 mb-10">
            Our Philosophy
          </span>
          <blockquote className="font-cormorant italic text-[clamp(1.8rem,4.5vw,5rem)] font-light leading-[1.25] text-charcoal">
            &ldquo;We believe that true luxury<br className="hidden md:block" /> is the art of subtlety.&rdquo;
          </blockquote>
        </motion.div>
      </section>

      {/* ── BRAND STORY ─────────────────────────── */}
      <section className="border-t border-charcoal/8 py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease }}
            className="relative aspect-[4/5] overflow-hidden"
            style={{
              background:
                'linear-gradient(160deg, #E8E2D8 0%, #D5CCBF 35%, #C2B9AE 65%, #B0A89E 100%)',
            }}
          >
            <div className="absolute inset-0 flex items-end p-8">
              <span className="font-cormorant italic text-sm text-charcoal/30 tracking-wider">
                Atelier, Barcelona 2024
              </span>
            </div>
          </motion.div>

          {/* Right — text */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease }}
            >
              <h2 className="font-cormorant text-[clamp(2rem,4vw,4rem)] font-light leading-tight text-charcoal mb-10">
                The House
              </h2>

              <div className="space-y-6 font-inter text-sm leading-loose text-charcoal/60">
                <p>
                  Maison was founded in Barcelona in 2019, born from a conviction that the fashion
                  industry had lost its way. In a market saturated with noise, we sought silence —
                  garments that speak through their quality alone, that need no logo to announce
                  themselves.
                </p>
                <p>
                  We collaborate with a small, rotating circle of master craftspeople across
                  Southern Europe. Each piece is produced in limited numbers — never more than
                  200 units — ensuring that every customer receives something genuinely rare. Our
                  fabrics are sourced directly from mills in Biella, Huddersfield, and the Loire
                  Valley.
                </p>
                <p>
                  We believe the most sustainable garment is one you will wear for the rest of
                  your life. That is why every Maison piece is designed without reference to trend,
                  engineered to improve with wear, and backed by a lifetime repair service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="block font-inter text-[9px] tracking-[0.45em] uppercase text-charcoal/30 mb-14"
          >
            What we stand for
          </motion.span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <div className="w-6 h-px bg-gold mb-8" />
                <h3 className="font-cormorant text-3xl font-light text-charcoal mb-5">
                  {value.title}
                </h3>
                <p className="font-inter text-sm leading-loose text-charcoal/55">
                  {value.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ─────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease }}
          >
            <span className="block font-inter text-[9px] tracking-[0.45em] uppercase text-charcoal/30 mb-8">
              The Founder
            </span>
            <h3 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
              Elena Voss
            </h3>
            <p className="font-inter text-sm leading-loose text-charcoal/55 mb-5">
              After ten years in the buying departments of Celine and The Row, Elena returned to
              Barcelona with one objective: to build a house that treated clothing as an object of
              lasting value, not seasonal consumption.
            </p>
            <p className="font-inter text-sm leading-loose text-charcoal/55">
              She remains the sole creative director, overseeing every piece from first sketch to
              final fitting.
            </p>
          </motion.div>

          {/* Founder portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease }}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden"
            style={{
              background:
                'linear-gradient(145deg, #C8C4BC 0%, #B0ABA3 40%, #9A9590 100%)',
            }}
          >
            <div className="absolute inset-0 flex items-end p-8">
              <div>
                <p className="font-cormorant italic text-base text-white/50">Elena Voss</p>
                <p className="font-inter text-[9px] tracking-[0.2em] uppercase text-white/30 mt-1">
                  Creative Director
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}
