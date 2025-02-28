'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { Product } from '../../lib/api/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, categoryName, image } = product;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${id}`}>
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${id}`} className="hover:text-blue-600 transition-colors">
          <h3 className="font-medium line-clamp-1">{name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2">{categoryName}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold">${price.toFixed(2)}</span>
          <button 
            className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
            aria-label={`Add ${name} to cart`}
          >
            <FiShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
