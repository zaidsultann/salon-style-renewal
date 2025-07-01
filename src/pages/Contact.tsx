
import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const locations = [
    {
      name: 'Main Location',
      address: '1075 Ceremonial Dr, Unit 6',
      city: 'Mississauga, ON L5R 2Z4',
      phone: '(905) 507-4965',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.1234567890123!2d-79.123456!3d43.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzI0LjQiTiA3OcKwMDcnMjQuNCJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca',
      hours: {
        'Monday': '10:00am - 7:00pm',
        'Tuesday': '10:30am - 2:00pm', 
        'Wednesday': '10:30am - 7:30pm',
        'Thursday': '10:30am - 7:30pm',
        'Friday': '10:30am - 9:00pm',
        'Saturday': '10:30am - 9:00pm',
        'Sunday': '10:30am - 9:00pm'
      }
    },
    {
      name: 'Second Location',
      address: '3050 Artesian Dr, Unit 7',
      city: 'Mississauga, ON L5M 7P5',
      phone: '(905) 828-4347',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.9876543210987!2d-79.987654!3d43.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDU5JzE1LjYiTiA3OcKwNTknMTUuNiJX!5e0!3m2!1sen!2sca!4v9876543210987!5m2!1sen!2sca',
      hours: {
        'Monday': '10:00am - 7:00pm',
        'Tuesday': '10:30am - 2:00pm',
        'Wednesday': '10:30am - 7:30pm', 
        'Thursday': '10:30am - 7:30pm',
        'Friday': '10:30am - 9:00pm',
        'Saturday': '10:30am - 9:00pm',
        'Sunday': '10:30am - 9:00pm'
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
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at either of our convenient locations or get in touch to learn more
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {locations.map((location, index) => (
            <div key={index} className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-6">
                {location.name}
              </h2>
              
              {/* Address */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  {location.address}<br />
                  {location.city}
                </p>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a 
                  href={`tel:${location.phone}`}
                  className="text-rose-600 hover:text-rose-700 font-semibold"
                >
                  {location.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Opening Hours</h3>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
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
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-12 md:mt-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
