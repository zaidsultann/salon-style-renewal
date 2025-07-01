
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, MessageSquarePlus } from 'lucide-react';

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
    },
    {
      name: 'Jessica Thompson',
      text: 'Amazing color work and the staff is so welcoming!',
      rating: 5
    },
    {
      name: 'Amanda Rodriguez',
      text: 'Love coming here for my monthly touch-ups. Always perfect!',
      rating: 5
    },
    {
      name: 'Lisa Williams',
      text: 'The best balayage I\'ve ever gotten. Will definitely be back!',
      rating: 5
    }
  ];

  const locations = [
    {
      name: 'Artesian Drive Location',
      address: '3050 Artesian Dr, Unit 7',
      reviewUrl: 'https://www.google.com/search?q=velvet+salon&rlz=1C1CHZN_enCA967CA967&oq=velvet+salon&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyBwgBEAAYgAQyBwgCEAAYgAQyCggDEAAYyQMYgAQyBwgEEAAYgAQyDQgFEC4YrwEYxwEYgAQyCggGEAAYkgMYgAQyEAgHEC4YrwEYxwEYgAQYjgUyEAgIEC4YrwEYxwEYgAQYjgUyBwgJEAAYgATSAQg0NDEyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&lqi=Cgx2ZWx2ZXQgc2Fsb25I96Hk9-WAgIAIWhYQABABGAAYASIMdmVsdmV0IHNhbG9ukgEKaGFpcl9zYWxvbqoBUgoJL20vMDU2OXpnEAEqECIMdmVsdmV0IHNhbG9uKAAyHxABIhveWS3CCJL9UiIpsG19Y-ERo3F7Ka9abho4VQQyEBACIgx2ZWx2ZXQgc2Fsb24#lkt=LocalPoiReviews&rlimm=1115483407537337452&lrd=0x882b41a29756403b:0xf7afe3fc31af46c,3,,,,'
    },
    {
      name: 'Ceremonial Drive Location',
      address: '1075 Ceremonial Dr, Unit 6',
      reviewUrl: 'https://www.google.com/search?q=velvet+salon&rlz=1C1CHZN_enCA967CA967&oq=velvet+salon&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyBwgBEAAYgAQyBwgCEAAYgAQyCggDEAAYyQMYgAQyBwgEEAAYgAQyDQgFEC4YrwEYxwEYgAQyCggGEAAYkgMYgAQyEAgHEC4YrwEYxwEYgAQYjgUyEAgIEC4YrwEYxwEYgAQYjgUyBwgJEAAYgATSAQg0NDEyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&lqi=Cgx2ZWx2ZXQgc2Fsb25IseD8jZuqgIAIWhYQABABGAAYASIMdmVsdmV0IHNhbG9ukgEMYmVhdXR5X3NhbG9uqgFSCgkvbS8wNTY5emcQASoQIgx2ZWx2ZXQgc2Fsb24oADIfEAEiG95ZLcIIkv1SIimwbX1j4RGjcXspr1puGjhVBDIQEAIiDHZlbHZldCBzYWxvbg#lkt=LocalPoiReviews&rlimm=15182350444414051845&lrd=0x882b40eb84679e53:0xd2b28b4a26cb2605,3,,,,'
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

        {/* Carousel for testimonials */}
        <div className="mb-12">
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg mx-2">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Leave a Review Section */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            Share Your Experience
          </h3>
          <p className="text-gray-600 mb-8">
            Had a great experience? We'd love to hear from you! Leave us a review at one of our locations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{location.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{location.address}</p>
                <a
                  href={location.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
                >
                  <MessageSquarePlus className="w-4 h-4" />
                  Leave a Review
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
