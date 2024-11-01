import React from 'react';
import { Leaf, Recycle, Heart } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About EcoSwap
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our mission is to make sustainable living accessible to everyone
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white mx-auto">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Sustainable Products
              </h3>
              <p className="mt-2 text-base text-gray-500">
                We carefully curate eco-friendly alternatives to everyday items,
                ensuring quality and sustainability.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mx-auto">
                <Recycle className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Environmental Impact
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Track your positive impact on the environment with every sustainable
                choice you make.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white mx-auto">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Community
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Join a growing community of environmentally conscious individuals
                making a difference.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-gray-500">
              Together, we can create a more sustainable future for our planet.
              Every small change matters, and we're here to help you make those
              changes easier and more impactful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}