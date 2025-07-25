
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, MessageSquarePlus, X } from 'lucide-react';

const TestimonialSection = () => {
  const [showLocationSelector, setShowLocationSelector] = useState(false);

  const testimonials = [
    {
      name: 'Vibhav Jaswal',
      text: 'This has been my go to salon for a year and a half now. Clean and professional services. Shout out to Honey, has always received excellent service and great advice from him.',
      rating: 5
    },
    {
      name: 'Khadijah Khan', 
      text: 'Love this place for all my essential services and Amna is the absolute best! Been getting my eyebrows, waxing and hair styled from her since I can remember!',
      rating: 5
    },
    {
      name: 'Ricardo Teixeira',
      text: 'Arshdeep does a great job on my hair, beard & eyebrows. Takes pride in his work, which has had me coming back for 2 years now.',
      rating: 5
    },
    {
      name: 'Ayaan Mahmood',
      text: 'Have been going here for all my services for a long time now, and Amina has been the absolute best! Threading, hair colour, hair cuts, more than satisfied every time!',
      rating: 5
    },
    {
      name: 'Michelle Arthur',
      text: 'I have been going to this place for 2 years now. It is well organized and clean. The workers are all friendly and professional. They do a good job.',
      rating: 5
    },
    {
      name: 'Mehak A',
      text: 'Been coming here for almost 8 years now as it’s my local waxing place and never once had any issues. They are really good. Today Amna was very helpful and did a great job. Definitely recommend.',
      rating: 5
    },
    {
      name: 'Sneh Patel',
      text: 'Got a haircut from Honey at Velvet Salon and I’m really happy with the results! He was super professional, listened to exactly what I wanted, and gave great suggestions too.',
      rating: 5
    },

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
    <section className="py-16 bg-gradient-to-r from-rose-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel for testimonials */}
        <div className="mb-12">
          <Carousel 
            className="max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic text-base leading-relaxed">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900 text-base">- {testimonial.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Leave a Review Section */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Share Your Experience
          </h3>
          <p className="text-gray-600 mb-6 text-base">
            Had a great experience? We'd love to hear from you!
          </p>
          
          <button
            onClick={() => setShowLocationSelector(true)}
            className="inline-flex items-center gap-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
          >
            <MessageSquarePlus className="w-5 h-5" />
            Leave a Review
          </button>
        </div>

        {/* Location Selector Modal */}
        {showLocationSelector && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-serif font-bold text-gray-900">
                  Select Location to Review
                </h3>
                <button
                  onClick={() => setShowLocationSelector(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <h4 className="font-semibold text-gray-900 mb-2">{location.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{location.address}</p>
                    <a
                      href={location.reviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-4 py-2 rounded-full transition-colors duration-300"
                      onClick={() => setShowLocationSelector(false)}
                    >
                      <MessageSquarePlus className="w-4 h-4" />
                      Leave Review
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
