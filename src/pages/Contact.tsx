
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Separator } from '@/components/ui/separator';

const Contact = () => {
  const locations = [
    {
      name: 'Main Location',
      address: '1075 Ceremonial Dr, Unit 6',
      city: 'Mississauga, ON L5R 2Z4',
      phone: '(905) 507-4965',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110736.88201476583!2d-79.79706201185714!3d43.545467060106176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b40eb84679e53%3A0xd2b28b4a26cb2605!2sVelvet%20Salon!5e1!3m2!1sen!2sca!4v1751491114081!5m2!1sen!2sca',
      hours: {
        'Monday': '10:00am - 7:00pm',
        'Tuesday': '10:00am - 7:00pm', 
        'Wednesday': '10:00am - 7:00pm',
        'Thursday': '10:00am - 7:00pm',
        'Friday': '10:00am - 7:00pm',
        'Saturday': '10:00am - 6:00pm',
        'Sunday': '10:00am - 5:00pm'
      }
    },
    {
      name: 'Second Location',
      address: '3050 Artesian Dr, Unit 7',
      city: 'Mississauga, ON L5M 7P5',
      phone: '(905) 828-4347',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.533229002781!2d-79.7172366234496!3d43.545368359397735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b41a29756403b%3A0xf7afe3fc31af46c!2sVelvet%20Salon!5e1!3m2!1sen!2sca!4v1751491002955!5m2!1sen!2sca',
      hours: {
        'Monday': '10:00am - 7:00pm',
        'Tuesday': '10:00am - 7:00pm',
        'Wednesday': '10:00am - 7:00pm', 
        'Thursday': '10:00am - 7:00pm',
        'Friday': '10:00am - 7:00pm',
        'Saturday': '10:00am - 6:00pm',
        'Sunday': '10:00am - 5:00pm'
      }
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/9aa49b50-05a6-43bc-a291-06a2a44341c1.png" 
              alt="Decorative divider" 
              className="w-20 h-auto opacity-80"
            />
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us or visit us at either of our convenient locations
          </p>
        </div>

        {/* Contact Form First */}
        <div className="mb-12 md:mb-16">
          <ContactForm />
        </div>

        {/* Locations Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Visit Our Locations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {locations.map((location, index) => (
              <div key={index}>
                <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-6">
                    {location.name}
                  </h3>
                  
                  {/* Address */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">
                      {location.address}<br />
                      {location.city}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
                    <a 
                      href={`tel:${location.phone}`}
                      className="text-rose-600 hover:text-rose-700 font-semibold"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Opening Hours</h4>
                    <div className="space-y-2">
                      {Object.entries(location.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between text-sm md:text-base">
                          <span className="text-gray-700 font-medium">{day}</span>
                          <span className="text-gray-600">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Google Maps Embed */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Location</h4>
                    <div className="bg-gray-200 rounded-lg overflow-hidden">
                      <iframe
                        src={location.mapEmbedUrl}
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                        title={`Map of ${location.name}`}
                      ></iframe>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div>
                    <a
                      href={`tel:${location.phone}`}
                      className="block w-full border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
                {/* Add separator line between locations except for the last one */}
                {index < locations.length - 1 && (
                  <div className="flex justify-center my-8">
                    <Separator className="w-24 h-px bg-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
