
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicePreview from '../components/ServicePreview';
import TestimonialSection from '../components/TestimonialSection';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicePreview />
      <TestimonialSection />
      <CallToAction />
    </div>
  );
};

export default Home;
