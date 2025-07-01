
import React from 'react';

const BusinessInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">
            Welcome to Velvet Salon
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Velvet Salon has been in the business for over 20 years. 
                With our team of skilled professionals we offer great 
                services and pricing for both men and women.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
