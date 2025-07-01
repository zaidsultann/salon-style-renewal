
import React from 'react';
import { Clock } from 'lucide-react';

const OperatingHours = () => {
  const hours = [
    { day: 'MONDAY', hours: '10:00 AM - 7:00 PM' },
    { day: 'TUESDAY', hours: '10:30 AM - 2:00 PM' },
    { day: 'WEDNESDAY', hours: '10:30 AM - 7:30 PM' },
    { day: 'THURSDAY', hours: '10:30 AM - 7:30 PM' },
    { day: 'FRIDAY', hours: '10:30 AM - 9:00 PM' },
    { day: 'SATURDAY', hours: '10:30 AM - 9:00 PM' },
    { day: 'SUNDAY', hours: '10:30 AM - 9:00 PM' }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Clock className="w-6 h-6 md:w-8 md:h-8 text-rose-600" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Our Timings
            </h2>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-4 md:p-8">
              <div className="space-y-2 md:space-y-4">
                {hours.map((schedule, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-2 md:py-3 px-3 md:px-4 rounded-lg bg-gradient-to-r from-rose-50 to-amber-50"
                  >
                    <span className="font-semibold text-sm md:text-lg text-gray-900">{schedule.day}</span>
                    <span className="font-medium text-sm md:text-base text-gray-900">
                      {schedule.hours}
                    </span>
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
