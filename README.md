# MAISON

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)

> Luxury fashion boutique website — a multi-page Next.js 14 showcase with editorial animations, quiet-luxury aesthetic, and full mobile responsiveness.

---

## Overview

**MAISON** is a portfolio-grade luxury fashion boutique site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. The design language draws from editorial fashion references (Celine, The Row, Toteme) — oversized Cormorant Garamond typography, generous white space, CSS-gradient product placeholders, and slow deliberate animations.

## Pages

| Route | Description |
|---|---|
| `/` | Hero with letter-stagger animation, featured collection, editorial strip with parallax, press logos |
| `/collection` | Full 6-product grid with client-side category filter and staggered entrance |
| `/about` | Pull quote, brand story, values section, founder profile |
| `/contact` | Two-column layout — address/hours + styled contact form |

## Tech Stack

- **Framework** — Next.js 14 (App Router, TypeScript)
- **Styling** — Tailwind CSS 3 with custom brand tokens
- **Animation** — Framer Motion 11 (stagger reveals, parallax, page transitions)
- **Fonts** — Cormorant Garamond (headings) + Inter (body) via `next/font/google`

## Brand Tokens

| Token | Value | Use |
|---|---|---|
| `offwhite` | `#FAF9F6` | Page background |
| `cream` | `#F2EDE4` | Section backgrounds |
| `silver` | `#C8C8C8` | Borders, dividers |
| `charcoal` | `#1A1A1A` | Primary text |
| `gold` | `#C9A96E` | Accent (used sparingly) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Animation System

All animations use `ease: [0.25, 0.1, 0.25, 1]` — slow, deliberate, refined. No bouncy springs.

- Hero: letter-by-letter stagger on load
- Cards: `whileInView` fade-up with `staggerChildren: 0.1s`
- Editorial strip: parallax via `useScroll` + `useTransform`
- Nav links: underline draws from left on hover
- Mobile menu: Framer Motion slide-in from right

---

*Built as part of an AI Builder portfolio.*
