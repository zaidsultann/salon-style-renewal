
import React from 'react';

const BusinessInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-rose-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
            Welcome to Velvet Salon
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Velvet Salon has been in the business for over 20 years. 
                With our team of skilled professionals we offer great 
                services and pricing for both men and women.
              </p>
              <div className="bg-gradient-to-r from-rose-100 to-amber-100 rounded-xl p-6 border-2 border-rose-200">
                <p className="text-2xl md:text-3xl text-rose-700 font-bold text-center">
                  Walk-ins are welcome!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
