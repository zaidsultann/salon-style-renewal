import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LocationSelector from '@/components/LocationSelector'; // adjust path if needed

const DesignContainer = () => {
  const [isLocationSelectorOpen, setIsLocationSelectorOpen] = useState(false);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
          Ready to transform your look?
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Give us a call and book your appointment today with one of our expert stylists.
        </p>
        <div className="space-y-3 md:space-y-0 md:flex md:justify-center md:gap-4">
          <button
            onClick={() => setIsLocationSelectorOpen(true)}
            className="inline-block w-full md:w-auto bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full text-center transition-colors duration-300"
          >
            Call Us
          </button>
          <Link
            to="/contact"
            className="inline-block w-full md:w-auto border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white font-semibold px-8 py-3 rounded-full text-center transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Modal for location selection */}
      <LocationSelector 
        isOpen={isLocationSelectorOpen}
        onClose={() => setIsLocationSelectorOpen(false)}
      />
    </section>
  );
};

export default DesignContainer;
