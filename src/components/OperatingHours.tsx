
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
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Timing
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between py-4 px-6 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl hover:from-rose-100 hover:to-amber-100 transition-all duration-300"
                  >
                    <span className="font-bold text-gray-900 text-base md:text-lg tracking-wide">
                      {schedule.day}
                    </span>
                    <div className="flex items-center space-x-2 md:space-x-3 text-base md:text-lg">
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
