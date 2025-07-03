import React from 'react';

const BusinessInfo = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-rose-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Welcome to Velvet Salon
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/9aa49b50-05a6-43bc-a291-06a2a44341c1.png" 
                  alt="Decorative divider" 
                  className="w-20 h-auto opacity-80"
                />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Velvet Salon has been in the business for over 20 years. 
                With our team of skilled professionals we offer great 
                services and pricing for both men and women.
              </p>
              <div className="">
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