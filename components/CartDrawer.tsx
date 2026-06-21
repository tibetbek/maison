'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useCart } from '@/lib/cart'

const ease = [0.25, 0.1, 0.25, 1] as const

export default function CartDrawer() {
  const { items, isOpen, close, removeItem, updateQty, totalItems } = useCart()

  const subtotal = items.reduce((sum, i) => {
    const num = parseFloat(i.product.price.replace(/[^0-9.]/g, ''))
    return sum + num * i.qty
  }, 0)

  const currency = items[0]?.product.price.startsWith('€') ? '€' : '$'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            onClick={close}
            className="fixed inset-0 z-50 bg-charcoal/25 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-offwhite shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-charcoal/8">
              <div>
                <h2 className="font-cormorant text-2xl font-light text-charcoal">
                  Your Bag
                </h2>
                {totalItems > 0 && (
                  <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-charcoal/35 mt-0.5">
                    {totalItems} {totalItems === 1 ? 'piece' : 'pieces'}
                  </p>
                )}
              </div>
              <button
                onClick={close}
                aria-label="Close cart"
                className="text-charcoal/40 hover:text-charcoal transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-12 h-12 border border-charcoal/15 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-charcoal/30">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                  </div>
                  <p className="font-cormorant italic text-xl text-charcoal/40">Your bag is empty.</p>
                  <button
                    onClick={close}
                    className="font-inter text-[9px] tracking-[0.3em] uppercase text-charcoal/50 hover:text-charcoal transition-colors cursor-pointer underline underline-offset-4"
                  >
                    Continue browsing
                  </button>
                </div>
              ) : (
                <div className="flex flex-col divide-y divide-charcoal/6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="py-5 flex gap-4">
                      <div className="relative w-16 h-20 flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-cormorant text-lg font-light text-charcoal leading-tight">
                              {item.product.name}
                            </h3>
                            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-charcoal/35 mt-0.5">
                              {item.size}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id, item.size)}
                            className="text-charcoal/25 hover:text-charcoal/60 transition-colors mt-0.5 cursor-pointer flex-shrink-0"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          {/* Qty controls */}
                          <div className="flex items-center gap-3 border border-charcoal/15">
                            <button
                              onClick={() => updateQty(item.product.id, item.size, -1)}
                              className="w-8 h-8 flex items-center justify-center text-charcoal/50 hover:text-charcoal transition-colors cursor-pointer"
                            >
                              −
                            </button>
                            <span className="font-inter text-sm text-charcoal w-4 text-center">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.product.id, item.size, 1)}
                              className="w-8 h-8 flex items-center justify-center text-charcoal/50 hover:text-charcoal transition-colors cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-cormorant text-lg font-light text-charcoal/60">
                            {item.product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-charcoal/8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-charcoal/40">
                    Subtotal
                  </span>
                  <span className="font-cormorant text-2xl font-light text-charcoal">
                    {currency}{subtotal.toLocaleString()}
                  </span>
                </div>
                <p className="font-inter text-[9px] tracking-[0.15em] text-charcoal/30">
                  Shipping and taxes calculated at checkout
                </p>
                <button
                  onClick={close}
                  className="w-full py-4 bg-charcoal text-offwhite font-inter text-[10px] tracking-[0.35em] uppercase hover:bg-charcoal/85 transition-colors duration-300 cursor-pointer"
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
