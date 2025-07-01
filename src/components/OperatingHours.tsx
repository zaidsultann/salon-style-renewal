
import React from 'react';

const OperatingHours = () => {
  const hours = [
    { day: 'MONDAY', open: '10:00am', close: '7:00pm' },
    { day: 'TUESDAY', open: '10:00am', close: '7:00pm' },
    { day: 'WEDNESDAY', open: '10:00am', close: '7:00pm' },
    { day: 'THURSDAY', open: '10:00am', close: '7:00pm' },
    { day: 'FRIDAY', open: '10:00am', close: '7:00pm' },
    { day: 'SATURDAY', open: '10:00am', close: '6:00pm' },
    { day: 'SUNDAY', open: '10:00am', close: '5:00pm' }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Timing
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <div className="space-y-3 md:space-y-4">
                {hours.map((schedule, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between py-4 md:py-6 px-4 md:px-8 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl hover:from-rose-100 hover:to-amber-100 transition-all duration-300"
                  >
                    <span className="font-bold text-gray-900 text-lg md:text-xl tracking-wide">
                      {schedule.day}
                    </span>
                    <div className="flex items-center space-x-2 md:space-x-3 text-lg md:text-xl">
                      <span className="text-gray-800 font-semibold">{schedule.open}</span>
                      <span className="text-gray-400 font-bold">-</span>
                      <span className="text-gray-800 font-semibold">{schedule.close}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingHours;
