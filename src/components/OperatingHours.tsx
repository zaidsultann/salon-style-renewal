
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
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Timing
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-4 md:p-6">
              <div className="space-y-2 md:space-y-3">
                {hours.map((schedule, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between py-2 md:py-3 px-3 md:px-4 bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg"
                  >
                    <span className="font-medium text-gray-900 text-sm md:text-base">
                      {schedule.day}
                    </span>
                    <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base">
                      <span className="text-gray-700">{schedule.open}</span>
                      <span className="text-gray-400">-</span>
                      <span className="text-gray-700">{schedule.close}</span>
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
