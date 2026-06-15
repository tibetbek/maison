'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'
import { products, type Category } from '@/lib/products'

const ease = [0.25, 0.1, 0.25, 1] as const

type FilterOption = 'All' | Category

const filters: FilterOption[] = ['All', 'Outerwear', 'Dresses', 'Accessories']

export default function CollectionPage() {
  const [active, setActive] = useState<FilterOption>('All')

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease }}
      className="pt-32 md:pt-40 pb-0"
    >
      {/* ── HEADER ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          <span className="block font-inter text-[9px] tracking-[0.45em] uppercase text-charcoal/35 mb-4">
            Spring / Summer 2025
          </span>
          <h1 className="font-cormorant text-[clamp(3rem,8vw,9rem)] font-light leading-none text-charcoal">
            SS 2025<br />Collection
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-8 h-px bg-charcoal/12 origin-left"
        />

        {/* ── FILTER BAR ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="mt-8 flex flex-wrap gap-6"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`relative font-inter text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                active === filter ? 'text-charcoal' : 'text-charcoal/35 hover:text-charcoal/70'
              }`}
            >
              {filter}
              {active === filter && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-charcoal"
                  transition={{ duration: 0.3, ease }}
                />
              )}
            </button>
          ))}

          <span className="ml-auto font-inter text-[9px] tracking-[0.2em] uppercase text-charcoal/25">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </span>
        </motion.div>
      </div>

      {/* ── PRODUCT GRID ───────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16 md:mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center font-cormorant italic text-2xl text-charcoal/30"
          >
            No pieces in this category.
          </motion.p>
        )}
      </div>

      {/* ── EDITORIAL FOOTER BAR ───────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease }}
        className="mt-28 md:mt-36 py-16 px-6 md:px-10 bg-cream"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-cormorant italic text-3xl md:text-4xl font-light text-charcoal/70 text-center md:text-left">
            Each piece, a considered choice.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 font-inter text-[10px] tracking-[0.3em] uppercase text-charcoal/50 hover:text-charcoal transition-colors duration-300 group whitespace-nowrap"
          >
            Request a fitting
            <span className="h-px bg-charcoal/40 w-5 group-hover:w-10 transition-[width] duration-500 ease-refined" />
          </a>
        </div>
      </motion.div>

      <Footer />
    </motion.main>
  )
}
