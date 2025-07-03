
import React from 'react';
import HeroSection from '../components/HeroSection';
import BusinessInfo from '../components/BusinessInfo';
import ServicePreview from '../components/ServicePreview';
import OperatingHours from '../components/OperatingHours';
import DesignContainer from '../components/DesignContainer';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BusinessInfo />
      <ServicePreview />
      <OperatingHours />
      <DesignContainer/>
      <TestimonialSection />
    </div>
  );
};

export default Home;
