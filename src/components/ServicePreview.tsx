import React, { useState } from 'react';

const ServicePreview = () => {
  // OPTION 6: State for tracking image loading errors
  const [imageErrors, setImageErrors] = useState({});

  // OPTION 1A: Using public folder paths (current approach)
  const servicesPublicFolder = [
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

  // OPTION 2B: Using imported images (DISABLED - uncomment imports above to use this)
  // const servicesImported = [
  //   {
  //     title: 'Hair Cuts',
  //     description: 'Expert cuts tailored to your face shape and lifestyle',
  //     image: hairCutsImg // Only works if you uncomment the imports
  //   },
  //   {
  //     title: 'Hair Coloring',
  //     description: 'Stunning color transformations and highlights',
  //     image: hairColoringImg // Only works if you uncomment the imports
  //   },
  //   {
  //     title: 'Styling',
  //     description: 'Special occasion styling and everyday looks',
  //     image: stylingImg // Only works if you uncomment the imports
  //   },
  //   {
  //     title: 'Treatments',
  //     description: 'Nourishing treatments for healthy, beautiful hair',
  //     image: treatmentsImg // Only works if you uncomment the imports
  //   }
  // ];

  // OPTION 7: Using external placeholder images as fallback
  const servicesWithFallback = [
    {
      title: 'Hair Cuts',
      description: 'Expert cuts tailored to your face shape and lifestyle',
      image: '/images/gallery/hair-cuts.jpg',
      fallback: 'https://images.unsplash.com/photo-1562322140-8198e1c75b31?w=400&h=300&fit=crop'
    },
    {
      title: 'Hair Coloring',
      description: 'Stunning color transformations and highlights',
      image: '/images/gallery/hair-coloring.png',
      fallback: 'https://images.unsplash.com/photo-1522336418966-5b8bb2a7f2a9?w=400&h=300&fit=crop'
    },
    {
      title: 'Styling',
      description: 'Special occasion styling and everyday looks',
      image: '/images/gallery/styling.jpg',
      fallback: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop'
    },
    {
      title: 'Treatments',
      description: 'Nourishing treatments for healthy, beautiful hair',
      image: '/images/gallery/treatments.png',
      fallback: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=300&fit=crop'
    }
  ];

  // Choose which services array to use (change this to test different options)
  const services = servicesWithFallback; // CURRENT: Using fallback option

  // OPTION 5: Error handling for images
  const handleImageError = (e, service, index) => {
    console.log(`Image failed to load: ${service.image}`);
    
    // Set error state
    setImageErrors(prev => ({ ...prev, [index]: true }));
    
    // OPTION 7: Try fallback image if available
    if (service.fallback && e.target.src !== service.fallback) {
      e.target.src = service.fallback;
    } else {
      // Hide image if no fallback works
      e.target.style.display = 'none';
    }
  };

  // OPTION 3A: Navigation handler with better error handling
  const handleNavigation = (path) => {
    try {
      // For React Router, replace with: navigate(path)
      // Check if we're in a client-side routing app
      if (window.history && window.history.pushState) {
        // Try client-side navigation first
        window.history.pushState(null, '', path);
        // Trigger a popstate event to update the app
        window.dispatchEvent(new PopStateEvent('popstate'));
      } else {
        // Fallback to full page navigation
        window.location.href = path;
      }
    } catch (error) {
      console.log('Navigation fallback:', error);
      // Ultimate fallback
      window.location.href = path;
    }
  };

  // OPTION 8: Check if image loaded successfully
  const handleImageLoad = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: false }));
  };

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
                
                {/* OPTION 5 & 7: Image with error handling and fallback */}
                {!imageErrors[index] && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => handleImageError(e, service, index)}
                    onLoad={() => handleImageLoad(index)}
                    loading="lazy"
                  />
                )}
                
                {/* OPTION 6: Fallback content when image fails */}
                {imageErrors[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-100 to-amber-100">
                    <div className="text-center">
                      <div className="text-4xl mb-2">✂️</div>
                      <p className="text-sm text-gray-600">{service.title}</p>
                    </div>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {/* OPTION 3A: Multiple navigation approaches */}
          <div className="space-y-2">
            <button
              onClick={() => handleNavigation('/services')}
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 mr-4"
            >
              View All Services
            </button>
            
            {/* OPTION 3B: Direct link as backup */}
            <a
              href="/services"
              className="inline-block border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Services Page
            </a>
          </div>
          
          {/* OPTION 3C: Alternative navigation options */}
          <div className="mt-4 text-sm text-gray-600">
            <p>Having trouble? Try the direct link above or contact us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;