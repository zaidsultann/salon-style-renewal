
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image Placeholder - Replace with actual salon image */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-amber-50">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* TODO: Add hero background image here */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg">
          [Hero Background Image - Beautiful salon interior or styled hair]
        </div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Velvet Salon
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Where beauty meets artistry. Experience luxury hair styling in the heart of the city.
        </p>
        <div className="space-x-4">
          <Link
            to="/booking"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            Book Appointment
          </Link>
          <Link
            to="/gallery"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-rose-600 font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
