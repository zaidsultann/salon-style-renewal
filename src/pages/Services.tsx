
import React, { useState } from 'react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('cuts');

  const serviceCategories = {
    cuts: {
      title: 'Hair Cuts',
      services: [
        { name: 'Women\'s Cut', price: '$65', description: 'Precision cut with wash and style' },
        { name: 'Men\'s Cut', price: '$45', description: 'Classic and modern men\'s cuts' },
        { name: 'Children\'s Cut', price: '$35', description: 'Gentle cuts for kids under 12' },
        { name: 'Bang Trim', price: '$20', description: 'Quick fringe refresh' }
      ]
    },
    color: {
      title: 'Hair Coloring',
      services: [
        { name: 'Full Color', price: '$120', description: 'Complete color transformation' },
        { name: 'Highlights', price: '$140', description: 'Partial or full highlights' },
        { name: 'Balayage', price: '$180', description: 'Hand-painted highlights' },
        { name: 'Root Touch-up', price: '$85', description: 'Cover gray roots' }
      ]
    },
    styling: {
      title: 'Styling & Special Occasions',
      services: [
        { name: 'Blowout', price: '$45', description: 'Professional wash and style' },
        { name: 'Updo', price: '$85', description: 'Elegant formal styling' },
        { name: 'Wedding Hair', price: '$150', description: 'Bridal hair styling' },
        { name: 'Curls & Waves', price: '$55', description: 'Beautiful curls or waves' }
      ]
    },
    treatments: {
      title: 'Hair Treatments',
      services: [
        { name: 'Deep Conditioning', price: '$60', description: 'Intensive moisture treatment' },
        { name: 'Keratin Treatment', price: '$250', description: 'Smoothing treatment' },
        { name: 'Scalp Treatment', price: '$75', description: 'Nourishing scalp therapy' },
        { name: 'Hair Glossing', price: '$95', description: 'Shine and color enhancement' }
      ]
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional hair services tailored to your unique style and needs
          </p>
        </div>

        {/* Service Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(serviceCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                activeCategory === key
                  ? 'bg-rose-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-8">
            {serviceCategories[activeCategory].title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCategories[activeCategory].services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <span className="text-rose-600 font-bold text-lg">{service.price}</span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Ready to Book?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us to schedule your appointment or consultation
          </p>
          <div className="space-x-4">
            <a
              href="/booking"
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
            >
              Book Online
            </a>
            <a
              href="tel:905-555-4567"
              className="inline-block border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
