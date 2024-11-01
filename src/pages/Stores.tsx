import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Bamboo Water Bottle',
    description: 'Sustainable bamboo water bottle with stainless steel interior',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    rating: 4.8,
    reviews: 128,
    category: 'Kitchen',
  },
  {
    id: 2,
    name: 'Reusable Produce Bags',
    description: 'Set of 5 mesh produce bags for plastic-free shopping',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    rating: 4.9,
    reviews: 89,
    category: 'Shopping',
  },
  {
    id: 3,
    name: 'Bamboo Cutlery Set',
    description: 'Portable bamboo utensil set with carrying case',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1584346133934-a3bd1c5de919?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    rating: 4.7,
    reviews: 156,
    category: 'Kitchen',
  },
];

export default function Stores() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Kitchen', 'Shopping', 'Bathroom', 'Home'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search eco-friendly products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-500">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <span className="text-lg font-medium text-emerald-600">${product.price}</span>
                </div>
                <button className="mt-4 w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}