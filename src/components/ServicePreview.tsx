
import React from 'react';
import { Link } from 'react-router-dom';

const ServicePreview = () => {
  const services = [
    {
      title: 'Hair Cuts',
      description: 'Expert cuts tailored to your face shape and lifestyle',
      image: '[Image: Professional hair cutting session]'
    },
    {
      title: 'Hair Coloring',
      description: 'Stunning color transformations and highlights',
      image: '[Image: Beautiful hair coloring results]'
    },
    {
      title: 'Styling',
      description: 'Special occasion styling and everyday looks',
      image: '[Image: Elegant hair styling]'
    },
    {
      title: 'Treatments',
      description: 'Nourishing treatments for healthy, beautiful hair',
      image: '[Image: Hair treatment process]'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional hair services designed to bring out your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-gradient-to-br from-rose-100 to-amber-100">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm text-center p-4">
                  {service.image}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;
