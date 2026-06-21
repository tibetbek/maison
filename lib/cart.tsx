'use client'

import { createContext, useCallback, useContext, useState } from 'react'
import type { Product } from './products'

export interface CartItem {
  product: Product
  size: string
  qty: number
}

interface CartCtx {
  items: CartItem[]
  addItem: (product: Product, size: string) => void
  removeItem: (id: number, size: string) => void
  updateQty: (id: number, size: string, delta: number) => void
  totalItems: number
  isOpen: boolean
  open: () => void
  close: () => void
}

const CartContext = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product: Product, size: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id && i.size === size)
      if (existing) return prev.map((i) => (i === existing ? { ...i, qty: i.qty + 1 } : i))
      return [...prev, { product, size, qty: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: number, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.product.id === id && i.size === size)))
  }, [])

  const updateQty = useCallback((id: number, size: string, delta: number) => {
    setItems((prev) =>
      prev.flatMap((i) => {
        if (i.product.id !== id || i.size !== size) return [i]
        const next = i.qty + delta
        return next <= 0 ? [] : [{ ...i, qty: next }]
      })
    )
  }, [])

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider
      value={{
        items, addItem, removeItem, updateQty, totalItems,
        isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}
