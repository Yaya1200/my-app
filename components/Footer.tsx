import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">HF</span>
              </div>
              <span className="text-xl font-bold text-white">HomeFinder</span>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted platform for finding your perfect home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/browse" className="hover:text-blue-400 transition">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="hover:text-blue-400 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">info@homefinder.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-400 mt-0.5" />
                <span className="text-sm">123 Real Estate Ave<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {currentYear} HomeFinder. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
