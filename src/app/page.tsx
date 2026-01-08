'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Star, Gift, Truck, CreditCard } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { products } from '@/lib/data/products';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  categories: string[];
  externalUrl: string;
  isPublished: boolean;
}

function getProductsByCategory(category: string) {
  return products.filter(product => 
    product.category === category && product.isPublished
  );
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activePromoIndex, setActivePromoIndex] = useState(0);

  const promos = [
    {
      main: "FREE SHIPPING",
      sub: "on orders over $75",
      extra: "Plus, free returns on all orders"
    },
    {
      main: "BUY 2 GET 1 FREE",
      sub: "on all Bras",
      extra: "Limited time offer"
    },
    {
      main: "NEW COLLECTION",
      sub: "Spring Romance 2024",
      extra: "Shop exclusive styles"
    },
    {
      main: "MEMBERS GET 15% OFF",
      sub: "Join now",
      extra: "Plus early access to sales"
    }
  ];

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(() => {
      setActivePromoIndex((current) => (current + 1) % promos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.filter((product: Product) => product.isPublished));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Enhanced Promo Banner */}
      <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white py-3">
        <div className="max-w-[500px] mx-auto px-4">
          <div className="flex justify-center items-center h-[70px]">
            {promos.map((promo, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-500 text-center ${
                  index === activePromoIndex ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
                }`}
              >
                <div className="text-xl font-bold tracking-wide mb-0.5">{promo.main}</div>
                <div className="text-base font-medium">{promo.sub}</div>
                <div className="text-sm text-white/90">{promo.extra}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section — modernized */}
      <section className="relative h-[70vh] bg-gray-900">
        <Image
          src="/images/hero.jpg"
          alt="Hero"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="mx-auto max-w-3xl">
              <div className="backdrop-blur-sm bg-white/6 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                <h1 className="text-4xl md:text-6xl font-serif font-extrabold mb-4 text-white leading-tight drop-shadow-md">
                  Spring Romance Collection
                </h1>
                <p className="text-lg md:text-xl mb-6 text-white/90">
                  Delicate laces, soft silhouettes and elevated essentials — handcrafted for everyday romance.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href="/category/new-arrivals"
                    className="inline-flex items-center justify-center bg-primary-800 text-white px-6 py-3 rounded-full hover:bg-primary-900 hover:scale-[1.02] transform transition shadow-lg font-semibold"
                  >
                    Shop New Arrivals
                  </Link>
                  <Link
                    href="/category/sets"
                    className="inline-flex items-center justify-center bg-white/90 text-primary-800 px-6 py-3 rounded-full hover:bg-white/100 transition font-medium"
                  >
                    Shop Sets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-gray-100 py-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center space-x-2">
              <Truck className="h-6 w-6 text-primary-600" />
              <span className="text-sm font-medium text-gray-800">Free Shipping Over $75</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Gift className="h-6 w-6 text-primary-600" />
              <span className="text-sm font-medium text-gray-800">Free Gift Wrapping</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-6 w-6 text-primary-600" />
              <span className="text-sm font-medium text-gray-800">Premium Quality</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CreditCard className="h-6 w-6 text-primary-600" />
              <span className="text-sm font-medium text-gray-800">Secure Payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-4 text-neutral-900">
            Shop by Category
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our curated collection of premium lingerie, swimwear, and loungewear
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Bras', image: '/images/categories/bras.jpg' },
              { name: 'Panties', image: '/images/categories/panties.jpg' },
              { name: 'Sets', image: '/images/categories/sets.jpg' },
              { name: 'Swimwear', image: '/images/categories/clothing.jpg' },
              { name: 'T-Shirts', image: '/images/categories/clothing.jpg' },
              { name: 'Loungewear', image: '/images/categories/new-arrivals.jpg' },
              { name: 'Sleepwear', image: '/images/categories/sleepwear.jpg' },
              { name: 'Accessories', image: '/images/categories/accessories.jpg' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.name.toLowerCase()}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                <div className="absolute inset-x-0 bottom-4 p-4">
                  <span className="inline-block bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm font-medium mb-2">{category.name}</span>
                  <div className="text-white/90 text-sm">Discover →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-4 text-neutral-900">
            Featured Collections
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Discover our most loved collections, curated just for you
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/collection/spring-romance" className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="/images/categories/new-arrivals.jpg"
                  alt="Spring Romance"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Spring Romance</h3>
                  <p className="text-white/90 mb-4">Delicate laces and romantic silhouettes</p>
                  <span className="inline-block bg-white text-primary-800 px-6 py-2 rounded-full text-sm font-medium">
                    Explore Collection
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/collection/summer-essentials" className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="/images/categories/sets.jpg"
                  alt="Summer Essentials"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Summer Essentials</h3>
                  <p className="text-white/90 mb-4">Swimwear, tees, and casual comfort</p>
                  <span className="inline-block bg-white text-primary-800 px-6 py-2 rounded-full text-sm font-medium">
                    Explore Collection
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/collection/lounge-and-sleep" className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="/images/categories/sleepwear.jpg"
                  alt="Lounge & Sleep"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Lounge & Sleep</h3>
                  <p className="text-white/90 mb-4">Cozy loungewear and sleepwear</p>
                  <span className="inline-block bg-white text-primary-800 px-6 py-2 rounded-full text-sm font-medium">
                    Explore Collection
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-neutral-900">Best Sellers</h2>
              <p className="text-gray-600 mt-2">Our most loved styles</p>
            </div>
            <Link
              href="/best-sellers"
              className="text-primary-600 hover:text-primary-700 flex items-center text-lg font-medium"
            >
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                id: '2',
                name: 'Lace Balconette Bra',
                price: 44.99,
                imageUrl: '/images/products/product-2.svg',
                category: 'Bras'
              },
              {
                id: '7',
                name: 'Lace Bra and Panty Set',
                price: 49.99,
                imageUrl: '/images/products/product-1.svg',
                category: 'Sets'
              },
              {
                id: '10',
                name: 'Silk Pajama Set',
                price: 89.99,
                imageUrl: '/images/products/product-4.svg',
                category: 'Sleepwear'
              },
              {
                id: '14',
                name: 'Oversized Comfort Hoodie',
                price: 54.99,
                imageUrl: '/images/products/product-1.svg',
                category: 'Clothing'
              }
            ].map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-transform transform group-hover:-translate-y-1">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <button 
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/95 hover:bg-white shadow-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        // TODO: Add to wishlist functionality
                      }}
                    >
                      <Heart className="h-5 w-5 text-primary-600" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary-800">${product.price.toFixed(2)}</p>
                      <span className="text-sm text-gray-500">{product.category}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4 text-neutral-900">
            Join The Club
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Subscribe to receive exclusive offers, early access to new collections, and $15 off your first purchase.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 border border-neutral-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary-800 text-white rounded-full hover:bg-primary-900 transition-colors text-lg font-medium"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

