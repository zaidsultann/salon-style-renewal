
import React, { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    // Hair Cuts
    { id: 1, category: 'cuts', title: 'Modern Bob Cut', image: '[Image: Stylish bob haircut]' },
    { id: 2, category: 'cuts', title: 'Layered Cut', image: '[Image: Layered hairstyle]' },
    { id: 3, category: 'cuts', title: 'Pixie Cut', image: '[Image: Chic pixie cut]' },
    { id: 4, category: 'cuts', title: 'Long Layers', image: '[Image: Long layered hair]' },
    { id: 5, category: 'cuts', title: 'Shag Cut', image: '[Image: Modern shag cut]' },
    { id: 6, category: 'cuts', title: 'Blunt Cut', image: '[Image: Sleek blunt cut]' },
    { id: 7, category: 'cuts', title: 'Textured Lob', image: '[Image: Textured long bob]' },
    { id: 8, category: 'cuts', title: 'Curtain Bangs', image: '[Image: Face-framing curtain bangs]' },
    
    // Hair Color
    { id: 9, category: 'color', title: 'Balayage Highlights', image: '[Image: Beautiful balayage]' },
    { id: 10, category: 'color', title: 'Ombre Color', image: '[Image: Ombre hair color]' },
    { id: 11, category: 'color', title: 'Full Highlight', image: '[Image: Full head highlights]' },
    { id: 12, category: 'color', title: 'Fashion Color', image: '[Image: Creative hair colors]' },
    { id: 13, category: 'color', title: 'Root Touch-up', image: '[Image: Natural root color]' },
    { id: 14, category: 'color', title: 'Lowlights', image: '[Image: Dimensional lowlights]' },
    { id: 15, category: 'color', title: 'Color Correction', image: '[Image: Color correction work]' },
    { id: 16, category: 'color', title: 'Platinum Blonde', image: '[Image: Platinum blonde hair]' },
    
    // Hair Styling
    { id: 17, category: 'styling', title: 'Wedding Updo', image: '[Image: Elegant bridal hair]' },
    { id: 18, category: 'styling', title: 'Beach Waves', image: '[Image: Natural beach waves]' },
    { id: 19, category: 'styling', title: 'Formal Style', image: '[Image: Formal hair styling]' },
    { id: 20, category: 'styling', title: 'Curly Blowout', image: '[Image: Voluminous curls]' },
    { id: 21, category: 'styling', title: 'Sleek Straight', image: '[Image: Sleek straight hair]' },
    { id: 22, category: 'styling', title: 'Half-Up Style', image: '[Image: Half-up hairstyle]' },
    { id: 23, category: 'styling', title: 'Braided Updo', image: '[Image: Intricate braided updo]' },
    { id: 24, category: 'styling', title: 'Vintage Waves', image: '[Image: Classic vintage waves]' },
    
    // Treatments
    { id: 25, category: 'treatments', title: 'Keratin Treatment', image: '[Image: Smooth keratin results]' },
    { id: 26, category: 'treatments', title: 'Deep Conditioning', image: '[Image: Healthy conditioned hair]' },
    { id: 27, category: 'treatments', title: 'Scalp Treatment', image: '[Image: Scalp care session]' },
    { id: 28, category: 'treatments', title: 'Hair Repair', image: '[Image: Damaged hair restoration]' },
    { id: 29, category: 'treatments', title: 'Glossing Service', image: '[Image: Shiny glossed hair]' },
    { id: 30, category: 'treatments', title: 'Protein Treatment', image: '[Image: Strengthened hair]' },
    
    // Men's Services
    { id: 31, category: 'mens', title: 'Classic Fade', image: '[Image: Men\'s fade haircut]' },
    { id: 32, category: 'mens', title: 'Beard Trim', image: '[Image: Professional beard styling]' },
    { id: 33, category: 'mens', title: 'Modern Pompadour', image: '[Image: Styled pompadour]' },
    { id: 34, category: 'mens', title: 'Textured Crop', image: '[Image: Textured men\'s cut]' },
    { id: 35, category: 'mens', title: 'Undercut Style', image: '[Image: Modern undercut]' },
    { id: 36, category: 'mens', title: 'Business Cut', image: '[Image: Professional men\'s cut]' }
  ];

  const filters = [
    { key: 'all', label: 'All Styles' },
    { key: 'cuts', label: 'Hair Cuts' },
    { key: 'color', label: 'Hair Color' },
    { key: 'styling', label: 'Styling' },
    { key: 'treatments', label: 'Treatments' },
    { key: 'mens', label: 'Men\'s Services' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Hair Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations and get inspired for your next look
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-colors duration-300 text-sm md:text-base ${
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-rose-100 to-amber-100 aspect-square cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs md:text-sm text-center p-2 md:p-4">
                {item.image}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 md:p-4">
                <h3 className="text-white font-semibold text-xs md:text-sm">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4">
            Love What You See?
          </h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Contact us to discuss your dream hairstyle
          </p>
          <a
            href="/contact"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full transition-colors duration-300 text-sm md:text-base"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
