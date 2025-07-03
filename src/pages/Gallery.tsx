import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [failedImages, setFailedImages] = useState(new Set());

  const galleryItems = [
    { id: 1, image: '/images/gallery/pic (12).jpg' },
    { id: 2, image: '/images/gallery/pic (4).jpg' },
    { id: 3, image: '/images/gallery/pic (9).jpg' },
    { id: 4, image: '/images/gallery/pic (1).jpg' },
    { id: 5, image: '/images/gallery/pic (16).jpg' },
    { id: 6, image: '/images/gallery/pic (7).jpg' },
    { id: 7, image: '/images/gallery/pic (13).jpg' },
    { id: 8, image: '/images/gallery/pic (6).jpg' },
    { id: 9, image: '/images/gallery/pic (3).jpg' },
    { id: 10, image: '/images/gallery/pic (15).jpg' },
    { id: 11, image: '/images/gallery/pic (10).jpg' },
    { id: 12, image: '/images/gallery/pic (8).jpg' },
    { id: 13, image: '/images/gallery/pic (14).jpg' },
    { id: 14, image: '/images/gallery/pic (5).jpg' },
    { id: 15, image: '/images/gallery/pic (11).jpg' },
    { id: 16, image: '/images/gallery/pic (2).jpg' },
    { id: 17, image: '/images/gallery/pic (17).jpg' },
    { id: 18, image: '/images/gallery/pic (18).jpg' },
    { id: 19, image: '/images/gallery/pic (19).jpg' },
    { id: 20, image: '/images/gallery/pic (20).jpg' },
  ];

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleImageError = (imageId) => {
    setFailedImages(prev => new Set([...prev, imageId]));
  };

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
              onClick={() => openModal(item)}
            >
              <img
                src={item.image}
                alt={`Hair style transformation ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => handleImageError(item.id)}
                style={{ display: failedImages.has(item.id) ? 'none' : 'block' }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>
              {/* Fallback content - shown if image fails to load */}
              {failedImages.has(item.id) && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs md:text-sm text-center p-2 md:p-4">
                  [Hair Style Image {item.id}]
                </div>
              )}
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

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            
            {/* Modal image */}
            {!failedImages.has(selectedImage.id) ? (
              <img
                src={selectedImage.image}
                alt={`Hair style transformation ${selectedImage.id}`}
                className="w-96 h-96 object-cover rounded-lg"
                onError={() => handleImageError(selectedImage.id)}
              />
            ) : (
              <div className="flex items-center justify-center text-white text-lg bg-gray-800 rounded-lg w-96 h-96">
                [Hair Style Image {selectedImage.id}]
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;