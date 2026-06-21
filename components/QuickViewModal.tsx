'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { Product } from '@/lib/products'
import { useCart } from '@/lib/cart'

const ease = [0.25, 0.1, 0.25, 1] as const

export default function QuickViewModal({
  product,
  onClose,
}: {
  product: Product | null
  onClose: () => void
}) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  // Reset on product change
  useEffect(() => {
    setSelectedSize(product?.sizes[0] ?? null)
    setAdded(false)
  }, [product])

  // Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  function handleAdd() {
    if (!product || !selectedSize) return
    addItem(product, selectedSize)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      onClose()
    }, 800)
  }

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-charcoal/45 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-x-4 top-1/2 z-50 -translate-y-1/2 mx-auto max-w-3xl bg-offwhite shadow-2xl md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full"
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4">
                    <span className="font-inter text-[9px] tracking-[0.3em] uppercase text-white/90 bg-charcoal/80 px-2.5 py-1">
                      New Arrival
                    </span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col p-8 md:p-10">
                {/* Close */}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="self-end mb-6 text-charcoal/40 hover:text-charcoal transition-colors cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                <span className="font-inter text-[9px] tracking-[0.35em] uppercase text-charcoal/35 mb-2">
                  {product.category} · {product.season}
                </span>
                <h2 className="font-cormorant text-3xl md:text-4xl font-light leading-tight text-charcoal">
                  {product.name}
                </h2>
                <p className="font-cormorant text-2xl font-light text-charcoal/55 mt-2">
                  {product.price}
                </p>

                <div className="my-6 h-px bg-charcoal/8" />

                <p className="font-inter text-[12px] leading-relaxed text-charcoal/50 mb-6">
                  {product.description}
                </p>

                {/* Sizes */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-inter text-[9px] tracking-[0.3em] uppercase text-charcoal/40">
                      Select size
                    </span>
                    {product.sizes[0] !== 'One Size' && (
                      <button className="font-inter text-[9px] tracking-[0.2em] uppercase text-charcoal/35 hover:text-charcoal transition-colors underline underline-offset-2 cursor-pointer">
                        Size guide
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[40px] px-3 py-2 border font-inter text-[11px] tracking-[0.15em] transition-all duration-200 cursor-pointer ${
                          selectedSize === size
                            ? 'border-charcoal bg-charcoal text-offwhite'
                            : 'border-charcoal/20 text-charcoal/60 hover:border-charcoal/50 hover:text-charcoal'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to cart */}
                <button
                  onClick={handleAdd}
                  disabled={!selectedSize || added}
                  className={`w-full py-4 font-inter text-[10px] tracking-[0.35em] uppercase transition-all duration-300 cursor-pointer ${
                    added
                      ? 'bg-charcoal/20 text-charcoal/50'
                      : 'bg-charcoal text-offwhite hover:bg-charcoal/85'
                  }`}
                >
                  {added ? '✓ Added to bag' : 'Add to bag'}
                </button>

                <p className="mt-4 text-center font-inter text-[9px] tracking-[0.2em] uppercase text-charcoal/25">
                  Complimentary shipping on orders over €500
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
