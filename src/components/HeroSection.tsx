import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const backgroundImage = '/images/gallery/salon-background.png';

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(4px)', // Adjust blur strength here (2px–8px recommended)
          transform: 'scale(1.05)', // Optional: zoom slightly to hide edges from blur
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Foreground content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Velvet Salon
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Where beauty meets artistry. Experience luxury hair styling in the heart of the city.
        </p>
        <div className="space-x-4">
          <Link
            to="/gallery"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
