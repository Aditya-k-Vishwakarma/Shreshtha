import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">FAQs</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer" />
              <Youtube className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} E-DakConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};