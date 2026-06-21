'use client'

import { CartProvider } from '@/lib/cart'
import Navigation from '@/components/Navigation'
import CartDrawer from '@/components/CartDrawer'

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Navigation />
      {children}
      <CartDrawer />
    </CartProvider>
  )
}
