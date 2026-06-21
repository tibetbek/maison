'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Product } from '@/lib/products'
import QuickViewModal from './QuickViewModal'

interface ProductCardProps {
  product: Product
  index?: number
  animate?: boolean
}

const ease = [0.25, 0.1, 0.25, 1] as const

export default function ProductCard({ product, index = 0, animate = true }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false)

  const content = (
    <div onClick={() => setShowModal(true)} className="group cursor-pointer">
      <CardInner product={product} />
    </div>
  )

  return (
    <>
      {animate ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: index * 0.1, ease }}
        >
          {content}
        </motion.div>
      ) : (
        content
      )}

      <QuickViewModal product={showModal ? product : null} onClose={() => setShowModal(false)} />
    </>
  )
}

function CardInner({ product }: { product: Product }) {
  return (
    <>
      {/* Product image */}
      <div className="relative aspect-[3/4] overflow-hidden mb-5">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-700 ease-refined group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Season tag */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="font-inter text-[9px] tracking-[0.25em] uppercase text-white/60">
            {product.season}
          </span>
          {product.isNew && (
            <span className="font-inter text-[9px] tracking-[0.25em] uppercase text-white bg-charcoal/75 px-2 py-0.5">
              New
            </span>
          )}
        </div>

        {/* Hover overlay + CTA */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors duration-700 ease-refined" />

        <div className="absolute bottom-5 left-5 right-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-refined">
          <span className="relative inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.2em] uppercase text-white">
            Quick view
            <span className="h-px bg-white/80 transition-[width] duration-500 ease-refined w-0 group-hover:w-6" />
          </span>
        </div>
      </div>

      {/* Product info */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-cormorant text-2xl font-light leading-tight text-charcoal group-hover:text-charcoal/70 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-charcoal/40 mt-1.5">
            {product.category}
          </p>
        </div>
        <p className="font-cormorant text-xl font-light text-charcoal/60 whitespace-nowrap mt-0.5">
          {product.price}
        </p>
      </div>
    </>
  )
}
