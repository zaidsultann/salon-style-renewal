import React from 'react';

const ServicePreview = () => {
  const services = [
    {
      title: 'Hair Cuts',
      description: 'Expert cuts tailored to your face shape and lifestyle',
      image: '/images/gallery/hair-cuts.jpg'
    },
    {
      title: 'Hair Coloring',
      description: 'Stunning color transformations and highlights',
      image: '/images/gallery/hair-coloring.png'
    },
    {
      title: 'Styling',
      description: 'Special occasion styling and everyday looks',
      image: '/images/gallery/styling.jpg'
    },
    {
      title: 'Treatments',
      description: 'Nourishing treatments for healthy, beautiful hair',
      image: '/images/gallery/treatments.png'
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
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
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            href="/services"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;