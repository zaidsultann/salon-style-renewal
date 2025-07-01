
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicePreview from '../components/ServicePreview';
import BusinessInfo from '../components/BusinessInfo';
import OperatingHours from '../components/OperatingHours';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicePreview />
      <BusinessInfo />
      <OperatingHours />
      <TestimonialSection />
    </div>
  );
};

export default Home;
