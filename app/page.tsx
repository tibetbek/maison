'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'
import { featuredProducts } from '@/lib/products'

const ease = [0.25, 0.1, 0.25, 1] as const

const letters = 'MAISON'.split('')
const taglineWords = 'Crafted for the discerning.'.split(' ')

function EditorialStrip() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])

  return (
    <section ref={ref} className="relative overflow-hidden h-[55vh] md:h-[65vh] flex items-center justify-center">
      <motion.div
        style={{ y }}
        className="absolute inset-[-20%]"
        initial={false}
      >
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(160deg, #1A1A1A 0%, #2C2825 40%, #1E1C18 70%, #0E0D0C 100%)',
          }}
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease }}
        >
          <span className="block font-inter text-[9px] tracking-[0.4em] uppercase text-gold/70 mb-8">
            The Maison Manifesto
          </span>
          <p className="font-cormorant italic text-[clamp(1.6rem,3.5vw,3.5rem)] font-light text-cream leading-[1.4]">
            &ldquo;Timeless pieces for a life well-lived.&rdquo;
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-10"
          >
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 font-inter text-[10px] tracking-[0.3em] uppercase text-cream/60 hover:text-cream transition-colors duration-300 group"
            >
              Explore the Collection
              <span className="h-px bg-cream/40 w-6 group-hover:w-12 transition-[width] duration-500 ease-refined" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease }}
    >
      {/* ── HERO ────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-offwhite overflow-hidden px-6">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% 40%, #F2EDE4 0%, transparent 100%)',
          }}
        />

        <div className="relative z-10 text-center">
          {/* MAISON — letter-by-letter stagger */}
          <h1
            className="font-cormorant font-light tracking-[0.22em] text-charcoal leading-none select-none"
            style={{ fontSize: 'clamp(5rem, 17vw, 20rem)' }}
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                style={{ display: 'inline-block' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.09,
                  duration: 0.9,
                  ease,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          {/* Tagline — word-by-word stagger */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-[0.5em]">
            {taglineWords.map((word, i) => (
              <motion.span
                key={i}
                className="font-inter text-[10px] md:text-xs tracking-[0.45em] uppercase text-charcoal/45"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.1 + i * 0.12,
                  duration: 0.7,
                  ease,
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease }}
            className="mt-10 mx-auto w-8 h-px bg-gold origin-center"
          />
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-inter text-[8px] tracking-[0.4em] uppercase text-charcoal/30">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className="w-px h-8 bg-charcoal/20"
          />
        </motion.div>
      </section>

      {/* ── THE NEW COLLECTION ──────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="block font-inter text-[9px] tracking-[0.4em] uppercase text-charcoal/35 mb-3">
              SS 2025
            </span>
            <h2 className="font-cormorant text-[clamp(2.5rem,6vw,6rem)] font-light leading-none text-charcoal">
              The New<br />Collection
            </h2>
          </div>
          <Link
            href="/collection"
            className="self-start md:self-auto inline-flex items-center gap-3 font-inter text-[10px] tracking-[0.25em] uppercase text-charcoal/50 hover:text-charcoal transition-colors duration-300 group"
          >
            View all pieces
            <span className="h-px bg-charcoal/40 w-5 group-hover:w-10 transition-[width] duration-400 ease-refined" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* ── EDITORIAL STRIP ─────────────────────── */}
      <EditorialStrip />

      {/* ── AS SEEN IN ──────────────────────────── */}
      <section className="py-20 md:py-24 border-t border-charcoal/6">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            <p className="text-center font-inter text-[8px] tracking-[0.5em] uppercase text-charcoal/28 mb-10">
              As seen in
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {['Vogue', "Harper's Bazaar", 'Elle'].map((pub, i) => (
                <motion.span
                  key={pub}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease }}
                  className="font-cormorant text-2xl md:text-3xl font-light tracking-widest text-charcoal/18 select-none"
                >
                  {pub}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────── */}
      <Footer />
    </motion.main>
  )
}
