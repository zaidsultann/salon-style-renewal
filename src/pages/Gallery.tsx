
import React, { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    // Hair Cuts (expanded)
    { id: 1, category: 'cuts', title: 'Modern Bob Cut', image: '/public/images/gallery/bob-cut.jpg' },
    { id: 2, category: 'cuts', title: 'Layered Cut', image: '/public/images/gallery/layered-cut.jpg' },
    { id: 3, category: 'cuts', title: 'Pixie Cut', image: '/public/images/gallery/pixie-cut.jpg' },
    { id: 4, category: 'cuts', title: 'Long Layers', image: '/public/images/gallery/long-layers.jpg' },
    { id: 5, category: 'cuts', title: 'Shag Cut', image: '/public/images/gallery/shag-cut.jpg' },
    { id: 6, category: 'cuts', title: 'Blunt Cut', image: '/public/images/gallery/blunt-cut.jpg' },
    { id: 7, category: 'cuts', title: 'Textured Lob', image: '/public/images/gallery/textured-lob.jpg' },
    { id: 8, category: 'cuts', title: 'Curtain Bangs', image: '/public/images/gallery/curtain-bangs.jpg' },
    { id: 9, category: 'cuts', title: 'Asymmetrical Cut', image: '/public/images/gallery/asymmetrical.jpg' },
    { id: 10, category: 'cuts', title: 'Face-Framing Layers', image: '/public/images/gallery/face-framing.jpg' },
    { id: 11, category: 'cuts', title: 'Wolf Cut', image: '/public/images/gallery/wolf-cut.jpg' },
    { id: 12, category: 'cuts', title: 'Classic Bob', image: '/public/images/gallery/classic-bob.jpg' },
    
    // Hair Color (expanded)
    { id: 13, category: 'color', title: 'Balayage Highlights', image: '/public/images/gallery/balayage.jpg' },
    { id: 14, category: 'color', title: 'Ombre Color', image: '/public/images/gallery/ombre.jpg' },
    { id: 15, category: 'color', title: 'Full Highlights', image: '/public/images/gallery/full-highlights.jpg' },
    { id: 16, category: 'color', title: 'Fashion Colors', image: '/public/images/gallery/fashion-colors.jpg' },
    { id: 17, category: 'color', title: 'Root Touch-up', image: '/public/images/gallery/root-touchup.jpg' },
    { id: 18, category: 'color', title: 'Lowlights', image: '/public/images/gallery/lowlights.jpg' },
    { id: 19, category: 'color', title: 'Color Correction', image: '/public/images/gallery/color-correction.jpg' },
    { id: 20, category: 'color', title: 'Platinum Blonde', image: '/public/images/gallery/platinum.jpg' },
    { id: 21, category: 'color', title: 'Copper Tones', image: '/public/images/gallery/copper.jpg' },
    { id: 22, category: 'color', title: 'Chocolate Brown', image: '/public/images/gallery/chocolate-brown.jpg' },
    { id: 23, category: 'color', title: 'Ash Blonde', image: '/public/images/gallery/ash-blonde.jpg' },
    { id: 24, category: 'color', title: 'Red Highlights', image: '/public/images/gallery/red-highlights.jpg' },
    
    // Hair Styling (expanded)
    { id: 25, category: 'styling', title: 'Wedding Updo', image: '/public/images/gallery/wedding-updo.jpg' },
    { id: 26, category: 'styling', title: 'Beach Waves', image: '/public/images/gallery/beach-waves.jpg' },
    { id: 27, category: 'styling', title: 'Formal Style', image: '/public/images/gallery/formal-style.jpg' },
    { id: 28, category: 'styling', title: 'Curly Blowout', image: '/public/images/gallery/curly-blowout.jpg' },
    { id: 29, category: 'styling', title: 'Sleek Straight', image: '/public/images/gallery/sleek-straight.jpg' },
    { id: 30, category: 'styling', title: 'Half-Up Style', image: '/public/images/gallery/half-up.jpg' },
    { id: 31, category: 'styling', title: 'Braided Updo', image: '/public/images/gallery/braided-updo.jpg' },
    { id: 32, category: 'styling', title: 'Vintage Waves', image: '/public/images/gallery/vintage-waves.jpg' },
    { id: 33, category: 'styling', title: 'Messy Bun', image: '/public/images/gallery/messy-bun.jpg' },
    { id: 34, category: 'styling', title: 'Side Swept', image: '/public/images/gallery/side-swept.jpg' },
    { id: 35, category: 'styling', title: 'Twisted Updo', image: '/public/images/gallery/twisted-updo.jpg' },
    { id: 36, category: 'styling', title: 'Voluminous Curls', image: '/public/images/gallery/voluminous-curls.jpg' },
    
    // Treatments (expanded)
    { id: 37, category: 'treatments', title: 'Keratin Treatment', image: '/public/images/gallery/keratin.jpg' },
    { id: 38, category: 'treatments', title: 'Deep Conditioning', image: '/public/images/gallery/deep-conditioning.jpg' },
    { id: 39, category: 'treatments', title: 'Scalp Treatment', image: '/public/images/gallery/scalp-treatment.jpg' },
    { id: 40, category: 'treatments', title: 'Hair Repair', image: '/public/images/gallery/hair-repair.jpg' },
    { id: 41, category: 'treatments', title: 'Glossing Service', image: '/public/images/gallery/glossing.jpg' },
    { id: 42, category: 'treatments', title: 'Protein Treatment', image: '/public/images/gallery/protein-treatment.jpg' },
    { id: 43, category: 'treatments', title: 'Olaplex Treatment', image: '/public/images/gallery/olaplex.jpg' },
    { id: 44, category: 'treatments', title: 'Brazilian Blowout', image: '/public/images/gallery/brazilian-blowout.jpg' },
    
    // Men's Services (expanded)
    { id: 45, category: 'mens', title: 'Classic Fade', image: '/public/images/gallery/classic-fade.jpg' },
    { id: 46, category: 'mens', title: 'Beard Trim', image: '/public/images/gallery/beard-trim.jpg' },
    { id: 47, category: 'mens', title: 'Modern Pompadour', image: '/public/images/gallery/pompadour.jpg' },
    { id: 48, category: 'mens', title: 'Textured Crop', image: '/public/images/gallery/textured-crop.jpg' },
    { id: 49, category: 'mens', title: 'Undercut Style', image: '/public/images/gallery/undercut.jpg' },
    { id: 50, category: 'mens', title: 'Business Cut', image: '/public/images/gallery/business-cut.jpg' },
    { id: 51, category: 'mens', title: 'Buzz Cut', image: '/public/images/gallery/buzz-cut.jpg' },
    { id: 52, category: 'mens', title: 'Crew Cut', image: '/public/images/gallery/crew-cut.jpg' },
    
    // Bridal (new category)
    { id: 53, category: 'bridal', title: 'Bridal Updo Classic', image: '/public/images/gallery/bridal-updo-1.jpg' },
    { id: 54, category: 'bridal', title: 'Bridal Half-Up', image: '/public/images/gallery/bridal-half-up.jpg' },
    { id: 55, category: 'bridal', title: 'Bridal Braided', image: '/public/images/gallery/bridal-braided.jpg' },
    { id: 56, category: 'bridal', title: 'Bridal Vintage', image: '/public/images/gallery/bridal-vintage.jpg' },
    { id: 57, category: 'bridal', title: 'Bridal Romantic', image: '/public/images/gallery/bridal-romantic.jpg' },
    { id: 58, category: 'bridal', title: 'Bridal Modern', image: '/public/images/gallery/bridal-modern.jpg' },
    
    // Extensions (new category)
    { id: 59, category: 'extensions', title: 'Tape-In Extensions', image: '/public/images/gallery/tape-extensions.jpg' },
    { id: 60, category: 'extensions', title: 'Clip-In Extensions', image: '/public/images/gallery/clip-extensions.jpg' },
    { id: 61, category: 'extensions', title: 'Sew-In Extensions', image: '/public/images/gallery/sew-extensions.jpg' },
    { id: 62, category: 'extensions', title: 'Fusion Extensions', image: '/public/images/gallery/fusion-extensions.jpg' }
  ];

  const filters = [
    { key: 'all', label: 'All Styles' },
    { key: 'cuts', label: 'Hair Cuts' },
    { key: 'color', label: 'Hair Color' },
    { key: 'styling', label: 'Styling' },
    { key: 'treatments', label: 'Treatments' },
    { key: 'mens', label: 'Men\'s Services' },
    { key: 'bridal', label: 'Bridal' },
    { key: 'extensions', label: 'Extensions' }
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

        {/* Gallery Grid - 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-rose-100 to-amber-100 aspect-square cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs md:text-sm text-center p-2 md:p-4">
                [Image: {item.title}]
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
