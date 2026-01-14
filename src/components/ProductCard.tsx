'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category?: string;
    rating?: number;
    reviews?: number;
    colors?: string[];
    onSale?: boolean;
    salePrice?: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    // Quick view functionality to be implemented
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to cart functionality
  };

  const displayPrice = product.onSale && product.salePrice ? product.salePrice : product.price;
  const hasDiscount = product.onSale && product.salePrice && product.salePrice < product.price;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ring-2 ring-transparent hover:ring-primary-200/50">
          {/* Image Container */}
          <div className="relative aspect-[3/4] w-full bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Sale Badge */}
            {hasDiscount && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-400 text-white text-xs font-bold shadow-lg animate-pulse">
                SALE
              </div>
            )}

            {/* Category Badge */}
            {product.category && !hasDiscount && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-800 shadow-md">
                {product.category}
              </div>
            )}

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <button
                onClick={handleWishlist}
                className={`p-2.5 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 ${
                  isWishlisted
                    ? 'bg-primary-600 text-white'
                    : 'bg-white/95 text-gray-700 hover:bg-white'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart
                  className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`}
                />
              </button>
              <button
                onClick={handleQuickView}
                className="p-2.5 rounded-full bg-white/95 backdrop-blur-md text-gray-700 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Quick view"
              >
                <Eye className="h-4 w-4" />
              </button>
            </div>

            {/* Quick Add to Cart Button - Shows on Hover */}
            <div
              className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={handleAddToCart}
                className="w-full py-2.5 px-4 bg-white/95 backdrop-blur-md hover:bg-white text-gray-900 font-semibold text-sm rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-5 bg-white">
            {/* Product Name */}
            <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
              {product.name}
            </h3>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1.5 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i < Math.floor(product.rating!)
                          ? 'text-accent-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                {product.reviews && (
                  <span className="text-xs text-gray-600 font-medium">({product.reviews})</span>
                )}
              </div>
            )}

            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold text-primary-800">
                  ${displayPrice.toFixed(2)}
                </p>
                {hasDiscount && (
                  <p className="text-sm text-gray-400 line-through font-medium">
                    ${product.price.toFixed(2)}
                  </p>
                )}
              </div>
            </div>

            {/* Color Variants */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex items-center gap-2 mt-4">
                {product.colors.slice(0, 4).map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border-2 border-gray-200 hover:border-primary-600 hover:scale-110 transition-all cursor-pointer shadow-sm"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
                {product.colors.length > 4 && (
                  <span className="text-xs text-gray-600 font-medium">
                    +{product.colors.length - 4}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
