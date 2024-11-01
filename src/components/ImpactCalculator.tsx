import React from 'react';
import { TreePine, Droplets, Wind } from 'lucide-react';

export default function ImpactCalculator() {
  const impacts = [
    {
      icon: <TreePine className="h-8 w-8 text-emerald-600" />,
      title: "CO₂ Reduction",
      value: "2,450",
      unit: "kg",
      description: "Carbon dioxide emissions prevented"
    },
    {
      icon: <Droplets className="h-8 w-8 text-purple-600" />,
      title: "Water Saved",
      value: "15,000",
      unit: "L",
      description: "Water conservation achieved"
    },
    {
      icon: <Wind className="h-8 w-8 text-emerald-600" />,
      title: "Waste Reduced",
      value: "850",
      unit: "kg",
      description: "Plastic waste prevented from landfills"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Your Environmental Impact
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            See how your sustainable choices make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white p-2 rounded-full shadow-lg">
                  {impact.icon}
                </div>
              </div>
              <div className="pt-8 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {impact.title}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-extrabold text-emerald-600">
                    {impact.value}
                  </span>
                  <span className="ml-1 text-xl text-gray-500">{impact.unit}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}