'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Category } from '../../lib/api/products';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { id, name, description, image } = category;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="relative h-48 -mt-10 mb-6 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{name}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <Link
        href={`/categories/${id}`}
        className="inline-flex items-center text-blue-600 font-medium hover:underline"
      >
        Browse {name}
        <FiArrowRight className="ml-2" />
      </Link>
    </div>
  );
}
