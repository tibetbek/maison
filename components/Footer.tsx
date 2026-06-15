import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/collection', label: 'Collection' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/8 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          {/* Brand */}
          <div>
            <p className="font-cormorant text-3xl font-light tracking-[0.35em] text-charcoal mb-3">
              MAISON
            </p>
            <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-charcoal/40">
              Crafted for the discerning.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-inter text-[10px] tracking-[0.2em] uppercase text-charcoal/40 hover:text-charcoal transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Address */}
          <div className="text-right hidden md:block">
            <p className="font-inter text-[10px] tracking-[0.15em] text-charcoal/35 leading-loose">
              Carrer de Provença 123<br />
              08037 Barcelona, Spain
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-charcoal/8 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-inter text-[9px] tracking-[0.2em] uppercase text-charcoal/25">
            © {new Date().getFullYear()} Maison. All rights reserved.
          </p>
          <p className="font-inter text-[9px] tracking-[0.2em] uppercase text-charcoal/25">
            Privacy · Terms
          </p>
        </div>
      </div>
    </footer>
  )
}
