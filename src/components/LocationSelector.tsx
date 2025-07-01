
import React from 'react';
import { X } from 'lucide-react';

interface LocationSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ isOpen, onClose }) => {
  const locations = [
    {
      name: 'Main Location',
      address: '1075 Ceremonial Dr, Unit 6, Mississauga, ON L5R 2Z4',
      phone: '(905) 507-4965'
    },
    {
      name: 'Second Location',
      address: '3050 Artesian Dr, Unit 7, Mississauga, ON L5M 7P5',
      phone: '(905) 828-4347'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-serif font-bold text-gray-900">
            Select Location to Call
          </h3>
          <button
            onClick={onClose}
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
                href={`tel:${location.phone}`}
                className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-4 py-2 rounded-full transition-colors duration-300"
                onClick={onClose}
              >
                Call {location.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
