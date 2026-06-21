export type Category = 'Outerwear' | 'Dresses' | 'Accessories'

export interface Product {
  id: number
  name: string
  category: Category
  price: string
  imageUrl: string
  season: string
  isNew?: boolean
  sizes: string[]
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Cashmere Overcoat',
    category: 'Outerwear',
    price: '€890',
    imageUrl: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80&fit=crop',
    season: 'SS 25',
    isNew: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Double-faced cashmere in a deep ivory. Structured shoulders, fluid body. Designed for the grey spaces between seasons.',
  },
  {
    id: 2,
    name: 'Silk Slip Dress',
    category: 'Dresses',
    price: '€420',
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80&fit=crop',
    season: 'SS 25',
    isNew: true,
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Washed silk charmeuse with a slight sheen. Bias-cut, moves with the body. The kind of piece that finishes an outfit without trying.',
  },
  {
    id: 3,
    name: 'Wool Blazer',
    category: 'Outerwear',
    price: '€650',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80&fit=crop',
    season: 'SS 25',
    sizes: ['36', '38', '40', '42', '44'],
    description: 'Virgin wool, semi-structured. Patch pockets, horn buttons. The blazer your wardrobe will rotate around for the next decade.',
  },
  {
    id: 4,
    name: 'Leather Tote',
    category: 'Accessories',
    price: '€380',
    imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80&fit=crop',
    season: 'SS 25',
    sizes: ['One Size'],
    description: 'Full-grain vegetable-tanned calfskin. Unlined, ages beautifully. Made in a small atelier outside Firenze.',
  },
  {
    id: 5,
    name: 'Merino Turtleneck',
    category: 'Dresses',
    price: '€195',
    imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80&fit=crop',
    season: 'SS 25',
    isNew: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Extra-fine 17.5-micron merino. Ribbed at neck, cuffs, and hem. The sweater you reach for without thinking.',
  },
  {
    id: 6,
    name: 'Tailored Trousers',
    category: 'Accessories',
    price: '€290',
    imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80&fit=crop',
    season: 'SS 25',
    sizes: ['34', '36', '38', '40', '42'],
    description: 'Lightweight wool-blend with a clean break at the ankle. Two front pleats. Press crease. Wear with anything, for everything.',
  },
]

export const featuredProducts = products.slice(0, 3)
