
import React, { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'cuts', title: 'Modern Bob Cut', image: '[Image: Stylish bob haircut]' },
    { id: 2, category: 'color', title: 'Balayage Highlights', image: '[Image: Beautiful balayage]' },
    { id: 3, category: 'styling', title: 'Wedding Updo', image: '[Image: Elegant bridal hair]' },
    { id: 4, category: 'cuts', title: 'Layered Cut', image: '[Image: Layered hairstyle]' },
    { id: 5, category: 'color', title: 'Ombre Color', image: '[Image: Ombre hair color]' },
    { id: 6, category: 'styling', title: 'Beach Waves', image: '[Image: Natural beach waves]' },
    { id: 7, category: 'cuts', title: 'Pixie Cut', image: '[Image: Chic pixie cut]' },
    { id: 8, category: 'color', title: 'Full Highlight', image: '[Image: Full head highlights]' },
    { id: 9, category: 'styling', title: 'Formal Style', image: '[Image: Formal hair styling]' },
    { id: 10, category: 'cuts', title: 'Long Layers', image: '[Image: Long layered hair]' },
    { id: 11, category: 'color', title: 'Fashion Color', image: '[Image: Creative hair colors]' },
    { id: 12, category: 'styling', title: 'Curly Blowout', image: '[Image: Voluminous curls]' }
  ];

  const filters = [
    { key: 'all', label: 'All Styles' },
    { key: 'cuts', label: 'Hair Cuts' },
    { key: 'color', label: 'Hair Color' },
    { key: 'styling', label: 'Styling' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Hair Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations and get inspired for your next look
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                activeFilter === filter.key
                  ? 'bg-rose-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-rose-100 to-amber-100 aspect-square cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm text-center p-4">
                {item.image}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Love What You See?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a consultation to discuss your dream hairstyle
          </p>
          <a
            href="/booking"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
