'use client';

import { SearchFilters, PropertyType } from '@/lib/types';
import { useState } from 'react';
import { Search } from 'lucide-react';

interface PropertySearchProps {
  onSearch: (filters: SearchFilters) => void;
  loading?: boolean;
}

const propertyTypes: PropertyType[] = [
  'APARTMENT',
  'HOUSE',
  'VILLA',
  'COMMERCIAL',
  'LAND',
  'TOWNHOUSE',
  'STUDIO',
];

export default function PropertySearch({ onSearch, loading }: PropertySearchProps) {
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters({});
    onSearch({});
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            placeholder="Enter city"
            value={filters.city || ''}
            onChange={(e) =>
              setFilters({ ...filters, city: e.target.value || undefined })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            value={filters.propertyType || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                propertyType: (e.target.value as PropertyType) || undefined,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Min Price
          </label>
          <input
            type="number"
            placeholder="Min price"
            value={filters.minPrice || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                minPrice: e.target.value ? parseInt(e.target.value) : undefined,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Price
          </label>
          <input
            type="number"
            placeholder="Max price"
            value={filters.maxPrice || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                maxPrice: e.target.value ? parseInt(e.target.value) : undefined,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bedrooms
          </label>
          <select
            value={filters.bedrooms || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                bedrooms: e.target.value ? parseInt(e.target.value) : undefined,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}+
              </option>
            ))}
          </select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bathrooms
          </label>
          <select
            value={filters.bathrooms || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                bathrooms: e.target.value ? parseInt(e.target.value) : undefined,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}+
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sort By
          </label>
          <select
            value={filters.sortBy || 'newest'}
            onChange={(e) =>
              setFilters({
                ...filters,
                sortBy: (e.target.value as any) || undefined,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">Newest</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          <Search size={20} />
          Search
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
