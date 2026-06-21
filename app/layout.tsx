import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import ClientShell from '@/components/ClientShell'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MAISON — Crafted for the discerning.',
  description: 'Luxury fashion boutique. Cashmere, silk, and fine tailoring for those who appreciate the art of subtlety.',
  keywords: ['luxury fashion', 'boutique', 'cashmere', 'silk', 'tailoring', 'Barcelona'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  )
}
