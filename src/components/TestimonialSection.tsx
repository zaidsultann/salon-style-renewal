
import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Absolutely love my new look! The stylists here are true artists.',
      rating: 5
    },
    {
      name: 'Maria Garcia', 
      text: 'Best hair salon experience I\'ve ever had. Highly recommend!',
      rating: 5
    },
    {
      name: 'Emily Chen',
      text: 'Professional, friendly staff and amazing results every time.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-rose-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
