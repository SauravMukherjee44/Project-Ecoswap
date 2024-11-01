import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'The Impact of Single-Use Plastics on Our Oceans',
    excerpt: 'Discover how switching to reusable alternatives can help save marine life and reduce ocean pollution.',
    author: 'Emma Green',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Environment',
  },
  {
    id: 2,
    title: '10 Easy Swaps for a Zero-Waste Kitchen',
    excerpt: 'Simple and effective ways to reduce waste in your kitchen while saving money and the environment.',
    author: 'Alex Rivers',
    date: '2024-03-12',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Lifestyle',
  },
  {
    id: 3,
    title: 'The Rise of Sustainable Fashion',
    excerpt: 'How eco-friendly clothing is reshaping the fashion industry and reducing environmental impact.',
    author: 'Sophie Chen',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Fashion',
  },
];

export default function Blogs() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Eco-Living Blog
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Discover tips, insights, and stories about sustainable living
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-500 mb-4">{blog.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span>{blog.author}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <button className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}