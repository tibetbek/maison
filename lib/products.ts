export type Category = 'Outerwear' | 'Dresses' | 'Accessories'

export interface Product {
  id: number
  name: string
  category: Category
  price: string
  gradient: string
  season: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Cashmere Overcoat',
    category: 'Outerwear',
    price: '€890',
    gradient: 'linear-gradient(145deg, #C9BFB0 0%, #A89888 45%, #8C7D70 100%)',
    season: 'SS 25',
  },
  {
    id: 2,
    name: 'Silk Slip Dress',
    category: 'Dresses',
    price: '€420',
    gradient: 'linear-gradient(145deg, #E8D5D0 0%, #D0B8BC 50%, #BCA0AA 100%)',
    season: 'SS 25',
  },
  {
    id: 3,
    name: 'Wool Blazer',
    category: 'Outerwear',
    price: '€650',
    gradient: 'linear-gradient(145deg, #3A3838 0%, #5A5555 45%, #2E2C2C 100%)',
    season: 'SS 25',
  },
  {
    id: 4,
    name: 'Leather Tote',
    category: 'Accessories',
    price: '€380',
    gradient: 'linear-gradient(145deg, #9C8060 0%, #B89878 50%, #A08060 100%)',
    season: 'SS 25',
  },
  {
    id: 5,
    name: 'Merino Turtleneck',
    category: 'Dresses',
    price: '€195',
    gradient: 'linear-gradient(145deg, #E0D8D0 0%, #D0C8C0 50%, #BCBAB5 100%)',
    season: 'SS 25',
  },
  {
    id: 6,
    name: 'Tailored Trousers',
    category: 'Accessories',
    price: '€290',
    gradient: 'linear-gradient(145deg, #4A4E5C 0%, #6A6E7A 50%, #383C4A 100%)',
    season: 'SS 25',
  },
]

export const featuredProducts = products.slice(0, 3)
