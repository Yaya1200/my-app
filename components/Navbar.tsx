'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">HF</span>
            </div>
            <span className="text-xl font-bold text-gray-900">HomeFinder</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/browse" className="text-gray-700 hover:text-blue-600 transition">
              Browse Properties
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
          </div>

          {/* Right Side Items - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/auth/login"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              <Link href="/browse" className="text-gray-700 hover:text-blue-600 transition">
                Browse Properties
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                About
              </Link>
              <hr className="my-2" />
              <Link href="/auth/login" className="text-gray-700 hover:text-blue-600 transition">
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
