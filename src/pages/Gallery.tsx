
import React from 'react';

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: '/public/images/gallery/bob-cut.jpg' },
    { id: 2, image: '/public/images/gallery/layered-cut.jpg' },
    { id: 3, image: '/public/images/gallery/balayage.jpg' },
    { id: 4, image: '/public/images/gallery/pixie-cut.jpg' },
    { id: 5, image: '/public/images/gallery/ombre.jpg' },
    { id: 6, image: '/public/images/gallery/wedding-updo.jpg' },
    { id: 7, image: '/public/images/gallery/full-highlights.jpg' },
    { id: 8, image: '/public/images/gallery/long-layers.jpg' },
    { id: 9, image: '/public/images/gallery/beach-waves.jpg' },
    { id: 10, image: '/public/images/gallery/fashion-colors.jpg' },
    { id: 11, image: '/public/images/gallery/shag-cut.jpg' },
    { id: 12, image: '/public/images/gallery/formal-style.jpg' },
    { id: 13, image: '/public/images/gallery/keratin.jpg' },
    { id: 14, image: '/public/images/gallery/blunt-cut.jpg' },
    { id: 15, image: '/public/images/gallery/classic-fade.jpg' },
    { id: 16, image: '/public/images/gallery/curly-blowout.jpg' },
    { id: 17, image: '/public/images/gallery/textured-lob.jpg' },
    { id: 18, image: '/public/images/gallery/lowlights.jpg' },
    { id: 19, image: '/public/images/gallery/beard-trim.jpg' },
    { id: 20, image: '/public/images/gallery/sleek-straight.jpg' },
    { id: 21, image: '/public/images/gallery/curtain-bangs.jpg' },
    { id: 22, image: '/public/images/gallery/color-correction.jpg' },
    { id: 23, image: '/public/images/gallery/pompadour.jpg' },
    { id: 24, image: '/public/images/gallery/half-up.jpg' },
    { id: 25, image: '/public/images/gallery/asymmetrical.jpg' },
    { id: 26, image: '/public/images/gallery/platinum.jpg' },
    { id: 27, image: '/public/images/gallery/textured-crop.jpg' },
    { id: 28, image: '/public/images/gallery/braided-updo.jpg' },
    { id: 29, image: '/public/images/gallery/face-framing.jpg' },
    { id: 30, image: '/public/images/gallery/copper.jpg' },
    { id: 31, image: '/public/images/gallery/undercut.jpg' },
    { id: 32, image: '/public/images/gallery/vintage-waves.jpg' },
    { id: 33, image: '/public/images/gallery/wolf-cut.jpg' },
    { id: 34, image: '/public/images/gallery/chocolate-brown.jpg' },
    { id: 35, image: '/public/images/gallery/business-cut.jpg' },
    { id: 36, image: '/public/images/gallery/messy-bun.jpg' },
    { id: 37, image: '/public/images/gallery/classic-bob.jpg' },
    { id: 38, image: '/public/images/gallery/ash-blonde.jpg' },
    { id: 39, image: '/public/images/gallery/buzz-cut.jpg' },
    { id: 40, image: '/public/images/gallery/side-swept.jpg' },
    { id: 41, image: '/public/images/gallery/root-touchup.jpg' },
    { id: 42, image: '/public/images/gallery/crew-cut.jpg' },
    { id: 43, image: '/public/images/gallery/twisted-updo.jpg' },
    { id: 44, image: '/public/images/gallery/red-highlights.jpg' },
    { id: 45, image: '/public/images/gallery/voluminous-curls.jpg' },
    { id: 46, image: '/public/images/gallery/deep-conditioning.jpg' },
    { id: 47, image: '/public/images/gallery/bridal-updo-1.jpg' },
    { id: 48, image: '/public/images/gallery/scalp-treatment.jpg' },
    { id: 49, image: '/public/images/gallery/bridal-half-up.jpg' },
    { id: 50, image: '/public/images/gallery/hair-repair.jpg' },
    { id: 51, image: '/public/images/gallery/bridal-braided.jpg' },
    { id: 52, image: '/public/images/gallery/glossing.jpg' },
    { id: 53, image: '/public/images/gallery/bridal-vintage.jpg' },
    { id: 54, image: '/public/images/gallery/protein-treatment.jpg' },
    { id: 55, image: '/public/images/gallery/bridal-romantic.jpg' },
    { id: 56, image: '/public/images/gallery/olaplex.jpg' },
    { id: 57, image: '/public/images/gallery/bridal-modern.jpg' },
    { id: 58, image: '/public/images/gallery/brazilian-blowout.jpg' },
    { id: 59, image: '/public/images/gallery/tape-extensions.jpg' },
    { id: 60, image: '/public/images/gallery/clip-extensions.jpg' },
    { id: 61, image: '/public/images/gallery/sew-extensions.jpg' },
    { id: 62, image: '/public/images/gallery/fusion-extensions.jpg' }
  ];

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Hair Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations
          </p>
        </div>

        {/* Gallery Grid - 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-rose-100 to-amber-100 aspect-square cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs md:text-sm text-center p-2 md:p-4">
                [Hair Style Image]
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
