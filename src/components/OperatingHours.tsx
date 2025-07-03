import React from 'react';

const OperatingHours = () => {
  const hours = [
    { day: 'MONDAY', open: '10:00AM', close: '7:00PM' },
    { day: 'TUESDAY', open: '10:00AM', close: '7:00PM' },
    { day: 'WEDNESDAY', open: '10:00AM', close: '7:00PM' },
    { day: 'THURSDAY', open: '10:00AM', close: '7:00PM' },
    { day: 'FRIDAY', open: '10:00AM', close: '7:00PM' },
    { day: 'SATURDAY', open: '10:00AM', close: '6:00PM' },
    { day: 'SUNDAY', open: '10:00AM', close: '5:00PM' }
  ];

  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-rose-50 to-amber-50 font-outfit">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Timing
          </h2>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl overflow-hidden">
          <div className="p-4 md:p-6 divide-y divide-gray-200">
            {hours.map((schedule, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4"
              >
                <span className="font-bold text-gray-900 text-lg md:text-xl tracking-wide">
                  {schedule.day}
                </span>
                <div className="flex items-center space-x-2 md:space-x-3 text-lg md:text-xl text-gray-800 font-normal">
                  <span>{schedule.open}</span>
                  <span className="text-gray-500 font-normal">-</span>
                  <span>{schedule.close}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingHours;