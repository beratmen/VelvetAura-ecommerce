'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Gift, Truck, CreditCard, Shield, Sparkles, Heart, Quote } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ProductCard';
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

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activePromoIndex, setActivePromoIndex] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

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

  const heroSlides = [
    {
      title: "Spring Romance Collection",
      subtitle: "Delicate laces, soft silhouettes and elevated essentials",
      image: "https://images.unsplash.com/photo-1583846112476-f85e60c0e2f8?auto=format&fit=crop&w=1600&q=80",
      cta: "Shop New Arrivals",
      ctaLink: "/category/new-arrivals"
    },
    {
      title: "Luxury Sleepwear",
      subtitle: "Indulge in comfort with our premium silk collection",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1600&q=80",
      cta: "Explore Sleepwear",
      ctaLink: "/category/sleepwear"
    },
    {
      title: "Intimate Sets",
      subtitle: "Perfectly paired for effortless elegance",
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1600&q=80",
      cta: "Shop Sets",
      ctaLink: "/category/sets"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "The quality is absolutely amazing! The lace is delicate yet durable, and the fit is perfect.",
      verified: true
    },
    {
      name: "Emily R.",
      rating: 5,
      text: "I've never felt more confident. The attention to detail in every piece is incredible.",
      verified: true
    },
    {
      name: "Jessica L.",
      rating: 5,
      text: "Fast shipping, beautiful packaging, and the products exceeded my expectations!",
      verified: true
    }
  ];

  useEffect(() => {
    fetchProducts();
    
    const promoInterval = setInterval(() => {
      setActivePromoIndex((current) => (current + 1) % promos.length);
    }, 3000);

    const heroInterval = setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => {
      clearInterval(promoInterval);
      clearInterval(heroInterval);
    };
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
      
      {/* Animated Promo Banner */}
      <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        <div className="max-w-[500px] mx-auto px-4 relative z-10">
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

      {/* Hero Section - Redesigned */}
      <section className="relative h-[85vh] bg-gray-900 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeHeroSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === activeHeroSlide
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-10 absolute'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                    <Sparkles className="h-4 w-4 text-primary-300" />
                    <span className="text-sm font-medium text-white">New Collection</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={slide.ctaLink}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-800 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl font-semibold text-lg group"
                    >
                      {slide.cta}
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/category/sets"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30 font-medium text-lg"
                    >
                      Explore All
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveHeroSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeHeroSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Benefits Bar - Enhanced */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Free Shipping", subtitle: "Orders over $75" },
              { icon: Gift, title: "Gift Wrapping", subtitle: "Complimentary" },
              { icon: Shield, title: "Secure Payment", subtitle: "100% Protected" },
              { icon: CreditCard, title: "Easy Returns", subtitle: "30-Day Policy" }
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{benefit.title}</div>
                  <div className="text-xs text-gray-600">{benefit.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid - Bento Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-serif font-bold mb-4 text-gray-900">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of premium lingerie, swimwear, and loungewear
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'Bras', image: 'https://images.unsplash.com/photo-1583846112476-f85e60c0e2f8?auto=format&fit=crop&w=800&q=60', featured: true },
              { name: 'Panties', image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=60' },
              { name: 'Sets', image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=60', featured: true },
              { name: 'Swimwear', image: 'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?auto=format&fit=crop&w=800&q=60' },
              { name: 'Bodysuits', image: 'https://images.unsplash.com/photo-1583846112476-f85e60c0e2f8?auto=format&fit=crop&w=800&q=60' },
              { name: 'Loungewear', image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=800&q=60' },
              { name: 'Sleepwear', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=60', featured: true },
              { name: 'Robes', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=60' },
              { name: 'Teddies', image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=60' },
              { name: 'Shapewear', image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=60' },
              { name: 'Chemises', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=60' },
              { name: 'Babydolls', image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=60' },
              { name: 'Corsets', image: 'https://images.unsplash.com/photo-1583846112476-f85e60c0e2f8?auto=format&fit=crop&w=800&q=60' },
              { name: 'Hosiery', image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=60' },
              { name: 'Accessories', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=60' },
              { name: 'Activewear', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=60' },
            ].map((category, index) => (
              <Link
                key={category.name}
                href={`/category/${category.name.toLowerCase()}`}
                className={`group relative overflow-hidden rounded-3xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ring-2 ring-transparent hover:ring-primary-200/50 ${
                  category.featured ? 'md:col-span-2 md:row-span-2' : ''
                } ${category.featured ? 'aspect-[4/5]' : 'aspect-[4/5]'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm md:text-base font-medium group-hover:gap-3 transition-all">
                    <span>Discover</span>
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers - Redesigned */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-secondary-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-100/30 to-primary-100/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-100 mb-6">
              <Star className="h-4 w-4 text-primary-600 fill-current" />
              <span className="text-sm font-semibold text-primary-800">Customer Favorites</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary-900 to-gray-900 bg-clip-text text-transparent">
              Our Most Loved Models
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Handpicked favorites that our customers can't get enough of
            </p>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['All', 'Bras', 'Sets', 'Sleepwear', 'Bodysuits', 'Robes', 'Teddies', 'Chemises', 'Babydolls', 'Corsets'].map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-300 hover:text-primary-700 hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products Grid with Featured Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Featured Large Product - Left Side */}
            <div className="md:col-span-5 group">
              <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-400 text-white font-bold text-sm shadow-lg flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    BESTSELLER
                  </div>
                </div>
                
                {/* Product Image */}
                <Image
                  src="https://images.unsplash.com/photo-1583846112476-f85e60c0e2f8?auto=format&fit=crop&w=800&q=80"
                  alt="Delicate Lace Bralette Set"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Product Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent-400 fill-current" />
                    ))}
                    <span className="text-white/90 text-sm ml-2">(247 reviews)</span>
                  </div>
                  
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">
                    Delicate Lace Bralette Set
                  </h3>
                  <p className="text-white/80 mb-4">
                    Romantic lace with adjustable straps and matching panty
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-white">$54.99</span>
                      <span className="text-lg text-white/60 line-through">$69.99</span>
                    </div>
                    <Link
                      href="/product/featured-1"
                      className="px-6 py-3 bg-white text-primary-800 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Regular Products Grid - Right Side */}
            <div className="md:col-span-7 grid grid-cols-2 gap-8">
              {[
                {
                  id: '2',
                  name: 'Silk Lace Balconette Bra',
                  price: 44.99,
                  imageUrl: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80',
                  category: 'Bras',
                  rating: 5,
                  reviews: 124,
                  colors: ['#000000', '#FFFFFF', '#FFB6C1', '#E6C9A8']
                },
                {
                  id: '7',
                  name: 'Romantic Lace Set',
                  price: 49.99,
                  imageUrl: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80',
                  category: 'Sets',
                  rating: 5,
                  reviews: 98,
                  onSale: true,
                  salePrice: 39.99,
                  colors: ['#000000', '#DC143C', '#FFFFFF']
                },
                {
                  id: '10',
                  name: 'Luxury Silk Pajama Set',
                  price: 89.99,
                  imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
                  category: 'Sleepwear',
                  rating: 5,
                  reviews: 76,
                  colors: ['#FFB6C1', '#E6E6FA', '#F0E68C']
                },
                {
                  id: '14',
                  name: 'Cozy Loungewear Set',
                  price: 54.99,
                  imageUrl: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=800&q=80',
                  category: 'Loungewear',
                  rating: 4,
                  reviews: 52,
                  colors: ['#D3D3D3', '#000000', '#F5F5DC']
                },
                {
                  id: '15',
                  name: 'Satin Bodysuit',
                  price: 38.99,
                  imageUrl: 'https://images.unsplash.com/photo-1583846112476-f85e60c0e2f8?auto=format&fit=crop&w=800&q=80',
                  category: 'Bodysuits',
                  rating: 5,
                  reviews: 89,
                  colors: ['#000000', '#FFFFFF', '#DC143C']
                },
                {
                  id: '16',
                  name: 'Silk Robe & Chemise',
                  price: 79.99,
                  imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
                  category: 'Robes',
                  rating: 5,
                  reviews: 67,
                  onSale: true,
                  salePrice: 64.99,
                  colors: ['#FFB6C1', '#E6E6FA', '#000000']
                },
                {
                  id: '17',
                  name: 'Lace Teddy',
                  price: 42.99,
                  imageUrl: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80',
                  category: 'Teddies',
                  rating: 5,
                  reviews: 103,
                  colors: ['#000000', '#DC143C', '#FFFFFF', '#000080']
                },
                {
                  id: '18',
                  name: 'High-Waist Panty Set',
                  price: 32.99,
                  imageUrl: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80',
                  category: 'Panties',
                  rating: 4,
                  reviews: 145,
                  colors: ['#000000', '#FFFFFF', '#FFB6C1', '#E6C9A8', '#DC143C']
                },
                {
                  id: '19',
                  name: 'Lace Chemise',
                  price: 46.99,
                  imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
                  category: 'Chemises',
                  rating: 5,
                  reviews: 87,
                  colors: ['#000000', '#FFFFFF', '#DC143C', '#FFB6C1']
                },
                {
                  id: '20',
                  name: 'Satin Babydoll Set',
                  price: 52.99,
                  imageUrl: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80',
                  category: 'Babydolls',
                  rating: 5,
                  reviews: 112,
                  onSale: true,
                  salePrice: 42.99,
                  colors: ['#FFB6C1', '#000000', '#FFFFFF']
                },
                {
                  id: '21',
                  name: 'Luxury Corset Set',
                  price: 98.99,
                  imageUrl: 'https://images.unsplash.com/photo-1583846112476-f85e60c0e2f8?auto=format&fit=crop&w=800&q=80',
                  category: 'Corsets',
                  rating: 5,
                  reviews: 64,
                  colors: ['#000000', '#DC143C', '#FFFFFF']
                },
                {
                  id: '22',
                  name: 'Thigh-High Stockings',
                  price: 24.99,
                  imageUrl: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80',
                  category: 'Hosiery',
                  rating: 4,
                  reviews: 156,
                  colors: ['#000000', '#FFFFFF', '#E6C9A8']
                }
              ].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          
          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/best-sellers"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              View All Best Sellers
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold mb-4 text-gray-900">
              Loved by Thousands
            </h2>
            <p className="text-lg text-gray-600">
              See what our customers are saying
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <Quote className="h-10 w-10 text-primary-200 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    {testimonial.verified && (
                      <div className="text-sm text-primary-600 flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        Verified Purchase
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Heart className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Join Our Community</span>
          </div>
          
          <h2 className="text-5xl font-serif font-bold mb-4 text-white">
            Get $15 Off Your First Order
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to receive exclusive offers, early access to new collections, and styling tips.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-md rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-white/60 text-lg"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary-800 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl font-semibold text-lg"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-white/70">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
