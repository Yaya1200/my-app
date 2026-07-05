'use client';

import { Property } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, MapPin, Bed, Bath, Ruler } from 'lucide-react';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
  onFavoriteToggle?: (propertyId: string) => void;
  isFavorite?: boolean;
}

export default function PropertyCard({
  property,
  onFavoriteToggle,
  isFavorite = false,
}: PropertyCardProps) {
  const [imageError, setImageError] = useState(false);
  const featuredImage = property.images?.[0]?.url || '/placeholder-property.jpg';

  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          {!imageError ? (
            <Image
              src={featuredImage}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
              <span>No Image Available</span>
            </div>
          )}

          {/* Featured Badge */}
          {property.featured && (
            <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
              Featured
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onFavoriteToggle?.(property.id);
            }}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <Heart
              size={20}
              className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}
            />
          </button>

          {/* Status Badge */}
          {property.status !== 'AVAILABLE' && (
            <div className="absolute bottom-2 right-2 bg-gray-900 bg-opacity-70 text-white px-3 py-1 rounded text-xs font-semibold">
              {property.status}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Property Type */}
          <p className="text-xs font-semibold text-blue-600 uppercase mb-1">
            {property.propertyType}
          </p>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <MapPin size={16} className="mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{property.city}, {property.state}</span>
          </div>

          {/* Specs */}
          <div className="flex gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Bed size={16} className="mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath size={16} className="mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Ruler size={16} className="mr-1" />
              <span>{Math.round(property.area)} m²</span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-auto pt-2 border-t border-gray-200">
            <p className="text-2xl font-bold text-blue-600">
              ${property.price.toLocaleString()}
            </p>
            {property.pricePerMonth && (
              <p className="text-sm text-gray-600">
                ${property.pricePerMonth.toLocaleString()}/month
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
