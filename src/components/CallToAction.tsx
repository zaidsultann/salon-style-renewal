
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70">
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg">
          [Background: Elegant salon interior or styling session]
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Ready for Your Transformation?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Book your appointment today and let our expert stylists create the perfect look for you.
        </p>
        <Link
          to="/booking"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300"
        >
          Book Your Appointment
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
