import React from 'react';
import { Lightbulb, Leaf, Recycle } from 'lucide-react';

export default function SustainabilityTips() {
  const tips = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Daily Habits",
      tips: [
        "Carry a reusable water bottle",
        "Use cloth bags for shopping",
        "Choose plastic-free packaging"
      ]
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Home Solutions",
      tips: [
        "Switch to LED bulbs",
        "Start composting",
        "Use natural cleaning products"
      ]
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Waste Reduction",
      tips: [
        "Practice proper recycling",
        "Avoid single-use items",
        "Repair before replacing"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sustainability Tips
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Simple ways to make a big impact
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tips.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-white mb-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-emerald-600">•</span>
                      <span className="ml-2 text-gray-500">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}