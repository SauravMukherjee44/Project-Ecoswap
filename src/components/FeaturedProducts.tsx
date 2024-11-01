import React, { useState } from 'react';
import { Star, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Bamboo Water Bottle',
    description: 'Sustainable bamboo water bottle with stainless steel interior',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Reusable Produce Bags',
    description: 'Set of 5 mesh produce bags for plastic-free shopping',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Bamboo Cutlery Set',
    description: 'Portable bamboo utensil set with carrying case',
    price: 19.99,
    image: 'https://m.media-amazon.com/images/I/810k2cJR9FL._SL1500_.jpg',
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Organic Cotton Tote',
    description: 'Durable organic cotton shopping bag with inner pockets',
    price: 29.99,
    image: 'https://m.media-amazon.com/images/I/81ZWR9jVJ1L._SX679_.jpg',
    rating: 4.6,
    reviews: 92,
  },
  {
    id: 5,
    name: 'Beeswax Food Wraps',
    description: 'Reusable food wraps made from organic cotton and beeswax',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1622467827417-bbe2237067a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    rating: 4.8,
    reviews: 143,
  },
  {
    id: 6,
    name: 'Glass Storage Containers',
    description: 'Set of 3 airtight glass containers for food storage',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1516847995948-c6523e129801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    rating: 4.9,
    reviews: 167,
  }
];

export default function FeaturedProducts() {
  const [startIndex, setStartIndex] = useState(0);
  const productsToShow = 3;

  const nextProducts = () => {
    setStartIndex((prevIndex) => 
      prevIndex + productsToShow >= products.length ? 0 : prevIndex + productsToShow
    );
  };

  const previousProducts = () => {
    setStartIndex((prevIndex) => 
      prevIndex - productsToShow < 0 ? Math.max(0, products.length - productsToShow) : prevIndex - productsToShow
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + productsToShow);

  return (
    <div id="featured-products" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Eco-Products
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Discover our most popular sustainable alternatives
          </p>
        </div>

        <div className="relative mt-12">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
            <button
              onClick={previousProducts}
              className="transform -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10 text-emerald-600 hover:text-emerald-700"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextProducts}
              className="transform translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10 text-emerald-600 hover:text-emerald-700"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-lg font-medium text-emerald-600">
                      ${product.price}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-500">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {Array.from({ length: Math.ceil(products.length / productsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * productsToShow)}
                className={`h-2 w-2 rounded-full mx-1 transition-all ${
                  Math.floor(startIndex / productsToShow) === index
                    ? 'bg-emerald-600 w-4'
                    : 'bg-gray-300 hover:bg-emerald-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}