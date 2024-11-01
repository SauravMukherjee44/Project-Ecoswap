import React from 'react';
import Banner from '../components/Banner';
import FeaturedProducts from '../components/FeaturedProducts';
import ImpactCalculator from '../components/ImpactCalculator';
import SustainabilityTips from '../components/SustainabilityTips';
import About from '../components/About';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Banner />
      <FeaturedProducts />
      <ImpactCalculator />
      <SustainabilityTips />
      <About />
    </div>
  );
}