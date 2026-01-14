'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, CreditCard, Truck, Shield, Award } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Trust Badges */}
        <div className="border-b border-white/10 py-8 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center gap-3 text-center">
              <Truck className="h-8 w-8 text-primary-400" />
              <div className="text-left">
                <div className="font-semibold text-sm">Free Shipping</div>
                <div className="text-xs text-gray-400">Orders over $75</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-center">
              <Shield className="h-8 w-8 text-primary-400" />
              <div className="text-left">
                <div className="font-semibold text-sm">Secure Payment</div>
                <div className="text-xs text-gray-400">100% Protected</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-center">
              <Award className="h-8 w-8 text-primary-400" />
              <div className="text-left">
                <div className="font-semibold text-sm">Premium Quality</div>
                <div className="text-xs text-gray-400">Guaranteed</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-center">
              <CreditCard className="h-8 w-8 text-primary-400" />
              <div className="text-left">
                <div className="font-semibold text-sm">Easy Returns</div>
                <div className="text-xs text-gray-400">30-Day Policy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
                Velvet Aura
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Discover premium lingerie and intimates crafted for comfort, confidence, and timeless elegance.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-500 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-500 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-500 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Shop Column */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Shop</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/category/new-arrivals" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/category/bras" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Bras
                  </Link>
                </li>
                <li>
                  <Link href="/category/panties" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Panties
                  </Link>
                </li>
                <li>
                  <Link href="/category/sets" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Sets
                  </Link>
                </li>
                <li>
                  <Link href="/category/sleepwear" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Sleepwear
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service Column */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Customer Service</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/size-guide" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Stay Connected</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe for exclusive offers and updates.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="w-full rounded-full px-4 py-2.5 bg-white/10 border border-white/20 placeholder-gray-500 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold text-sm transition-all duration-300 hover:shadow-glow hover:scale-105"
                >
                  {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
              <p className="text-gray-500 text-xs mt-3">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Velvet Aura. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
