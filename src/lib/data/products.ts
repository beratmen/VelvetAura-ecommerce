export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  sizes: string[];
  colors: string[];
  isPublished: boolean;
  updatedAt?: string;
  details?: string[];
  materials?: string[];
  careInstructions?: string[];
  isNewArrival?: boolean;
  reviews?: {
    rating: number;
    comment: string;
    author: string;
    date: string;
  }[];
}

// Shared products data store
export const products: Product[] = [
  // New Arrivals
  {
    id: '1',
    name: 'Velvet Dream Bustier',
    price: 89.99,
    description: 'Luxurious velvet bustier with delicate lace trim',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    category: 'Bras',
    sizes: ['32B', '34B', '36B', '32C', '34C', '36C'],
    colors: ['Black', 'Burgundy', 'Navy'],
    isPublished: true,
    isNewArrival: true,
    details: ['Velvet and lace combination', 'Adjustable straps', 'Hook and eye closure'],
    materials: ['80% Polyester', '20% Elastane'],
    careInstructions: ['Hand wash cold', 'Do not tumble dry']
  },
  {
    id: '2',
    name: 'Silk Touch Sleep Set',
    price: 129.99,
    description: 'Elegant silk pajama set with contrast piping',
    imageUrl: 'https://images.unsplash.com/photo-1542219550-6d54f1f0f8f9?auto=format&fit=crop&w=1200&q=80',
    category: 'Sets',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Champagne', 'Rose', 'Pearl'],
    isPublished: true,
    isNewArrival: true,
    details: ['100% Mulberry silk', 'Long sleeve top', 'Full-length pants', 'Contrast piping'],
    materials: ['100% Silk'],
    careInstructions: ['Dry clean only']
  },

  // Bras
  {
    id: '3',
    name: 'Lace Perfection T-Shirt Bra',
    price: 49.99,
    description: 'Seamless t-shirt bra with delicate lace wings',
    imageUrl: 'https://images.unsplash.com/photo-1520975698513-3bc5c0027b54?auto=format&fit=crop&w=1200&q=80',
    category: 'Bras',
    sizes: ['32A', '34A', '36A', '32B', '34B', '36B', '32C', '34C', '36C'],
    colors: ['Nude', 'Black', 'White'],
    isPublished: true,
    details: ['Seamless cups', 'Adjustable straps', 'Hook and eye closure'],
    materials: ['85% Nylon', '15% Spandex']
  },
  {
    id: '4',
    name: 'Balconette Beauty',
    price: 54.99,
    description: 'Classic balconette bra with beautiful embroidery',
    imageUrl: 'https://images.unsplash.com/photo-1520975688405-0f7d4a2b5a6c?auto=format&fit=crop&w=1200&q=80',
    category: 'Bras',
    sizes: ['32B', '34B', '36B', '32C', '34C', '36C', '32D', '34D', '36D'],
    colors: ['Red', 'Black', 'Ivory'],
    isPublished: true,
    details: ['Balconette style', 'Embroidered cups', 'Fully adjustable straps']
  },

  // Panties
  {
    id: '5',
    name: 'Lace Brazilian Brief',
    price: 24.99,
    description: 'Sexy Brazilian cut brief with stretch lace',
    imageUrl: 'https://images.unsplash.com/photo-1520975727263-9a7d6b5115f8?auto=format&fit=crop&w=1200&q=80',
    category: 'Panties',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Red', 'White', 'Nude'],
    isPublished: true,
    materials: ['90% Nylon', '10% Spandex']
  },
  {
    id: '6',
    name: 'Comfort Thong Collection',
    price: 18.99,
    description: 'Ultra-comfortable thong with seamless edges',
    imageUrl: 'https://images.unsplash.com/photo-1520975698513-9c7e33cc5a9c?auto=format&fit=crop&w=1200&q=80',
    category: 'Panties',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Nude', 'Black', 'White', 'Rose'],
    isPublished: true,
    details: ['Seamless design', 'No visible panty lines', 'Cotton gusset']
  },

  // Sets
  {
    id: '7',
    name: 'French Romance Set',
    price: 99.99,
    description: 'Matching bra and panty set with French lace',
    imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15cf479a5?auto=format&fit=crop&w=1200&q=80',
    category: 'Sets',
    sizes: ['32B/S', '34B/M', '36B/L', '32C/S', '34C/M', '36C/L'],
    colors: ['Black', 'Red', 'White'],
    isPublished: true,
    details: ['Underwired bra', 'Brazilian brief', 'Genuine French lace']
  },
  {
    id: '8',
    name: 'Bridal Dreams Collection',
    price: 149.99,
    description: 'Luxurious bridal set with garter',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    category: 'Sets',
    sizes: ['32B/S', '34B/M', '36B/L', '32C/S', '34C/M', '36C/L'],
    colors: ['White', 'Ivory', 'Champagne'],
    isPublished: true,
    isNewArrival: true,
    details: ['Push-up bra', 'Brazilian brief', 'Matching garter', 'Pearl details']
  },

  // Sleepwear
  {
    id: '9',
    name: 'Satin Dreams Nightgown',
    price: 69.99,
    description: 'Floor-length satin nightgown with lace trim',
    imageUrl: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
    category: 'Sleepwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Rose'],
    isPublished: true,
    details: ['Floor length', 'Adjustable straps', 'Side slits', 'Lace trim']
  },
  {
    id: '10',
    name: 'Cozy Fleece Robe',
    price: 79.99,
    description: 'Soft fleece robe with hood and pockets',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-45e0f8b3b4f6?auto=format&fit=crop&w=1200&q=80',
    category: 'Sleepwear',
    sizes: ['S/M', 'L/XL'],
    colors: ['Gray', 'Pink', 'White'],
    isPublished: true,
    details: ['Hooded design', 'Two front pockets', 'Belt closure']
  },

  // Accessories
  {
    id: '11',
    name: 'Silk Eye Mask',
    price: 29.99,
    description: 'Luxurious silk eye mask for peaceful sleep',
    imageUrl: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80',
    category: 'Accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Pink', 'Navy'],
    isPublished: true,
    materials: ['100% Mulberry Silk'],
    careInstructions: ['Hand wash cold']
  },
  {
    id: '12',
    name: 'Lace Garter Belt',
    price: 34.99,
    description: 'Elegant lace garter belt with adjustable straps',
    imageUrl: 'https://images.unsplash.com/photo-1501084885256-3f0f5a7f2d6e?auto=format&fit=crop&w=1200&q=80',
    category: 'Accessories',
    sizes: ['S/M', 'L/XL'],
    colors: ['Black', 'White', 'Red'],
    isPublished: true,
    details: ['Adjustable straps', 'Four garter clips', 'Stretch lace']
  },

  // More New Arrivals
  {
    id: '13',
    name: 'Crystal Embellished Bodysuit',
    price: 129.99,
    description: 'Luxury bodysuit with crystal detailing',
    imageUrl: 'https://images.unsplash.com/photo-1503341455253-0f9a3ef6e7b7?auto=format&fit=crop&w=1200&q=80',
    category: 'Sets',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White'],
    isPublished: true,
    isNewArrival: true,
    details: ['Crystal embellishments', 'Snap closure', 'Sheer mesh panels']
  },
  {
    id: '14',
    name: 'Silk Kimono Robe',
    price: 159.99,
    description: 'Long silk kimono with floral print',
    imageUrl: 'https://images.unsplash.com/photo-1520975698513-6b6a3a8f2a8a?auto=format&fit=crop&w=1200&q=80',
    category: 'Sleepwear',
    sizes: ['S/M', 'L/XL'],
    colors: ['Floral Print'],
    isPublished: true,
    isNewArrival: true,
    materials: ['100% Silk']
  },

  // Additional Products
  {
    id: '15',
    name: 'Strapless Wonder Bra',
    price: 59.99,
    description: 'Versatile strapless bra with multiway straps',
    imageUrl: 'https://images.unsplash.com/photo-1520975698513-9e2a9f0a8b2a?auto=format&fit=crop&w=1200&q=80',
    category: 'Bras',
    sizes: ['32B', '34B', '36B', '32C', '34C', '36C'],
    colors: ['Nude', 'Black'],
    isPublished: true
  },
  {
    id: '16',
    name: 'Seamless Comfort Brief',
    price: 22.99,
    description: 'High-waisted seamless brief',
    imageUrl: 'https://images.unsplash.com/photo-1520975698513-8f5d3d6c89b2?auto=format&fit=crop&w=1200&q=80',
    category: 'Panties',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Nude', 'Black', 'White'],
    isPublished: true
  }
];