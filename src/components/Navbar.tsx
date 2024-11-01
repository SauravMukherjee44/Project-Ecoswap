import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Search, Menu, X, User, LogIn } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 text-transparent bg-clip-text">
                EcoSwap
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <form onSubmit={handleSearch} className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search eco-friendly products..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </form>

            <Link to="/stores" className="text-gray-700 hover:text-emerald-600 font-medium">
              Stores
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-emerald-600 font-medium">
              Blogs
            </Link>
            <Link to="/#about" className="text-gray-700 hover:text-emerald-600 font-medium">
              About
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-emerald-600">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/signin" className="flex items-center space-x-1 text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full">
              <LogIn className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search eco-friendly products..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </form>
            <Link
              to="/stores"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600"
            >
              Stores
            </Link>
            <Link
              to="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600"
            >
              Blogs
            </Link>
            <Link
              to="/#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600"
            >
              About
            </Link>
            <Link
              to="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600"
            >
              Profile
            </Link>
            <Link
              to="/signin"
              className="block px-3 py-2 rounded-md text-base font-medium bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}