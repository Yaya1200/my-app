export type UserRole = 'GUEST' | 'USER' | 'AGENT' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type PropertyType = 'APARTMENT' | 'HOUSE' | 'VILLA' | 'COMMERCIAL' | 'LAND' | 'TOWNHOUSE' | 'STUDIO';
export type PropertyStatus = 'AVAILABLE' | 'SOLD' | 'RENTED' | 'PENDING';

export interface PropertyImage {
  id: string;
  url: string;
  order: number;
  isFeatured: boolean;
}

export interface Property {
  id: string;
  title: string;
  description?: string;
  price: number;
  pricePerMonth?: number;
  location: string;
  city: string;
  state: string;
  zipCode?: string;
  country: string;
  latitude?: number;
  longitude?: number;
  propertyType: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: number;
  amenities?: string[];
  featured: boolean;
  status: PropertyStatus;
  agentId: string;
  agent?: User;
  images?: PropertyImage[];
  createdAt: Date;
  updatedAt: Date;
}

export type InquiryStatus = 'PENDING' | 'REPLIED' | 'CLOSED';

export interface Inquiry {
  id: string;
  userId: string;
  propertyId: string;
  message: string;
  status: InquiryStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Favorite {
  id: string;
  userId: string;
  propertyId: string;
  createdAt: Date;
}

export interface SearchFilters {
  city?: string;
  propertyType?: PropertyType;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  sortBy?: 'newest' | 'lowest-price' | 'highest-price';
  page?: number;
  limit?: number;
}
