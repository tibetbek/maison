export type Category = 'Outerwear' | 'Dresses' | 'Accessories'

export interface Product {
  id: number
  name: string
  category: Category
  price: string
  imageUrl: string
  season: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Cashmere Overcoat',
    category: 'Outerwear',
    price: '€890',
    imageUrl: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80&fit=crop',
    season: 'SS 25',
  },
  {
    id: 2,
    name: 'Silk Slip Dress',
    category: 'Dresses',
    price: '€420',
    imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80&fit=crop',
    season: 'SS 25',
  },
  {
    id: 3,
    name: 'Wool Blazer',
    category: 'Outerwear',
    price: '€650',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80&fit=crop',
    season: 'SS 25',
  },
  {
    id: 4,
    name: 'Leather Tote',
    category: 'Accessories',
    price: '€380',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80&fit=crop',
    season: 'SS 25',
  },
  {
    id: 5,
    name: 'Merino Turtleneck',
    category: 'Dresses',
    price: '€195',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80&fit=crop',
    season: 'SS 25',
  },
  {
    id: 6,
    name: 'Tailored Trousers',
    category: 'Accessories',
    price: '€290',
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4b0e5d?w=800&q=80&fit=crop',
    season: 'SS 25',
  },
]

export const featuredProducts = products.slice(0, 3)
