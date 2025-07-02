
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LocationSelector from '../components/LocationSelector';

const Services = () => {
  const [isLocationSelectorOpen, setIsLocationSelectorOpen] = useState(false);

  const hairCuts = [
    {
      title: 'Modern Bob Cut',
      description: 'A chic and contemporary bob that frames the face beautifully.',
      image: '/public/images/gallery/bob-cut.jpg'
    },
    {
      title: 'Layered Cut',
      description: 'Adds volume and movement with expertly placed layers.',
      image: '/public/images/gallery/layered-cut.jpg'
    },
    {
      title: 'Pixie Cut',
      description: 'A bold and stylish short cut for a confident look.',
      image: '/public/images/gallery/pixie-cut.jpg'
    }
  ];

  const hairColoring = [
    {
      title: 'Balayage Highlights',
      description: 'Sun-kissed natural highlights with a seamless blend.',
      image: '/public/images/gallery/balayage.jpg'
    },
    {
      title: 'Ombre Color',
      description: 'A gradual color transition from dark to light for a trendy style.',
      image: '/public/images/gallery/ombre.jpg'
    },
    {
      title: 'Full Highlights',
      description: 'Brighten your look with vibrant and dimensional highlights.',
      image: '/public/images/gallery/full-highlights.jpg'
    }
  ];

  const stylingServices = [
    {
      title: 'Wedding Updo',
      description: 'Elegant and sophisticated styles for your special day.',
      image: '/public/images/gallery/wedding-updo.jpg'
    },
    {
      title: 'Beach Waves',
      description: 'Effortless and natural-looking waves for a relaxed vibe.',
      image: '/public/images/gallery/beach-waves.jpg'
    },
    {
      title: 'Formal Style',
      description: 'Refined and polished styles for any formal occasion.',
      image: '/public/images/gallery/formal-style.jpg'
    }
  ];

  const treatmentServices = [
    {
      title: 'Keratin Treatment',
      description: 'Smooth and frizz-free hair with long-lasting results.',
      image: '/public/images/gallery/keratin.jpg'
    },
    {
      title: 'Deep Conditioning',
      description: 'Intense hydration and nourishment for healthy, revitalized hair.',
      image: '/public/images/gallery/deep-conditioning.jpg'
    },
    {
      title: 'Scalp Treatment',
      description: 'Invigorating treatment to promote a healthy scalp and hair growth.',
      image: '/public/images/gallery/scalp-treatment.jpg'
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of professional hair services tailored to your unique style and needs.
          </p>
        </div>

        {/* Hair Cuts Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Hair Cuts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {hairCuts.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hair Coloring Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Hair Coloring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {hairColoring.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Styling Services Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Styling Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stylingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Services Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Treatment Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {treatmentServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 md:p-12 bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
            Ready for Your Perfect Look?
          </h3>
          <p className="text-gray-600 mb-8 text-base md:text-lg">
            Get in touch with us to schedule your appointment or ask any questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsLocationSelectorOpen(true)}
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
            >
              Call Us
            </button>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-50 text-rose-600 border-2 border-rose-600 font-semibold px-8 py-3 rounded-full transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <LocationSelector 
        isOpen={isLocationSelectorOpen}
        onClose={() => setIsLocationSelectorOpen(false)}
      />
    </div>
  );
};

export default Services;
