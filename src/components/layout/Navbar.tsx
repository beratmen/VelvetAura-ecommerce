'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, ShoppingBag, User, X, Heart, ChevronDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';

const navigation = {
  categories: [
    { name: 'New Arrivals', href: '/category/new-arrivals' },
    { name: 'Bras', href: '/category/bras' },
    { name: 'Panties', href: '/category/panties' },
    { name: 'Sets', href: '/category/sets' },
    { name: 'Sleepwear', href: '/category/sleepwear' },
    { name: 'Accessories', href: '/category/accessories' },
  ],
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user } = useAuth();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-primary-50 hover:text-primary-800 transition-all duration-200"
                onClick={() => setIsMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link href="/" className="flex items-center group">
                <span className="text-3xl font-bold font-serif bg-gradient-to-r from-primary-800 to-primary-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                  Velvet Aura
                </span>
              </Link>
            </div>

            {/* Navigation links - Desktop */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-8">
              {navigation.categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="relative text-sm font-medium text-gray-700 hover:text-primary-800 transition-colors duration-200 group"
                >
                  {category.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-800 to-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex lg:flex-1 items-center justify-end gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-700 hover:text-primary-800 hover:bg-primary-50 rounded-full transition-all duration-200"
              >
                <span className="sr-only">Search</span>
                <Search className="h-5 w-5" />
              </button>

              {/* Wishlist - Hidden on mobile */}
              <Link
                href="/wishlist"
                className="hidden sm:block p-2 text-gray-700 hover:text-primary-800 hover:bg-primary-50 rounded-full transition-all duration-200"
              >
                <span className="sr-only">Wishlist</span>
                <Heart className="h-5 w-5" />
              </Link>

              {/* Account */}
              <Link
                href={user ? '/account' : '/login'}
                className="p-2 text-gray-700 hover:text-primary-800 hover:bg-primary-50 rounded-full transition-all duration-200"
              >
                <span className="sr-only">Account</span>
                <User className="h-5 w-5" />
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="group relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-800 to-primary-700 text-white rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-semibold">{itemCount}</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-secondary-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-2xl animate-slide-in-left">
            <div className="flex h-20 items-center justify-between px-4 border-b border-gray-200">
              <span className="text-2xl font-bold font-serif text-primary-800">
                Velvet Aura
              </span>
              <button
                type="button"
                className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto px-4 py-6">
              <ul className="space-y-1">
                {navigation.categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.href}
                      className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-800 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  href="/wishlist"
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-800 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="h-5 w-5" />
                  Wishlist
                </Link>
                <Link
                  href={user ? '/account' : '/login'}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-800 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  {user ? 'My Account' : 'Sign In'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          />
          <div className="fixed top-0 left-0 right-0 bg-white shadow-xl animate-slide-in-left">
            <div className="max-w-3xl mx-auto px-4 py-6">
              <div className="flex items-center gap-4">
                <Search className="h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="flex-1 text-lg outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
