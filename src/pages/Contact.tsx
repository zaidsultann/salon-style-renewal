
import React from 'react';

const Contact = () => {
  const locations = [
    {
      name: 'Main Location',
      address: '1075 Ceremonial Dr, Unit 6',
      city: 'Mississauga, ON L5R 2Z4',
      phone: '(905) 507-4965',
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
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at either of our convenient locations or get in touch to learn more
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <div key={index} className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
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
                    <div key={day} className="flex justify-between">
                      <span className="text-gray-700 font-medium">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
                  [Google Maps Embed - {location.name}]
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href="/booking"
                  className="block w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors duration-300"
                >
                  Book Appointment
                </a>
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
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
