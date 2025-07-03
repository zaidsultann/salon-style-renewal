import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // <-- THIS LINE IS NEEDED
import { ChevronDown, ChevronUp, X } from 'lucide-react';

// Location Selector Component
interface LocationSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ isOpen, onClose }) => {
  const locations = [
    {
      name: 'Main Location',
      address: '1075 Ceremonial Dr, Unit 6, Mississauga, ON L5R 2Z4',
      phone: '(905) 507-4005'
    },
    {
      name: 'Second Location',
      address: '3050 Artesian Dr, Unit 7, Mississauga, ON L5M 7P5',
      phone: '(905) 828-4247'
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

const Services = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [isLocationSelectorOpen, setIsLocationSelectorOpen] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  // Define popular services for highlighting
  const popularServices = [
    "Women's Haircut", "Men's Haircut", "Women's Haircut & Blowdry", 
    "Single Process Color", "Full Head Highlights", "Root Touch-up",
    "Beard Trim", "Balayage", "Shoulder length blowout", "Bang trim"
  ];

  const serviceCategories = {
    cuts: {
      title: 'Hair Cuts & Styling',
      services: [
        { category: "Styling Services", items: [
          { name: "Shoulder length layered cuts", price: "$60" },
          { name: "Shoulder to mid back length cuts", price: "$65" },
          { name: "Waist to buttocks length cuts", price: "$70" },
          { name: "Buttocks length cut", price: "$75" },
          { name: "Shoulder to mid back length/layering", price: "$65" },
          { name: "Mid back to waist length/layering", price: "$70" },
          { name: "Shoulder length blowout", price: "$45" },
          { name: "Shoulder length blowout with curls", price: "$50" },
          { name: "Shoulder to waist blowout with curls", price: "$55" },
          { name: "Waist to ballrooms blowout", price: "$60" },
          { name: "Waist to ballrooms blowout with curls", price: "$65" }
        ]},
        { category: "Women's Hair Services", items: [
          { name: "Women's Haircut", price: "$65" }, 
          { name: "Women's Haircut & Blowdry", price: "$85" },
          { name: "Frual layers", price: "$50" },
          { name: "All over layers", price: "$55" },
          { name: "Bang trim", price: "$15" },
          { name: "Wash and style", price: "$35" },
          { name: "Wash with full dry", price: "$40" },
          { name: "Wash and blow dry", price: "$35" },
          { name: "Gypsy treatment", price: "$65" },
          { name: "Gels and gellate (½)", price: "$40" },
          { name: "Keratin", price: "$160" }
        ]},
        { category: "Men's Hair Services", items: [
          { name: "Men's Haircut", price: "$25" },
          { name: "Men's regular cut", price: "$25" },
          { name: "Men's cut with shampoo", price: "$30" },
          { name: "Men's basic with shampoo", price: "$25" },
          { name: "Men's style", price: "$30" },
          { name: "Beard Trim", price: "$15" },
          { name: "Beard trim fringe with moustache", price: "$15" },
          { name: "Beard trim straight with beard", price: "$15" },
          { name: "Moustache trim", price: "$8" },
          { name: "Men's colour", price: "$40" },
          { name: "Men's cut with colour", price: "$50" },
          { name: "Beard and cut colour", price: "$55" },
          { name: "Men's cut and colour", price: "$55" }
        ]},
        { category: "Children's Services", items: [
          { name: "Child Haircut (12 & under)", price: "$25" },
          { name: "Child Haircut (13-17)", price: "$35" }
        ]}
      ]
    },
    coloring: {
      title: 'Hair Coloring & Chemical Services',
      services: [
        { category: "Full Color Services", items: [
          { name: "Single Process Color", price: "$85" },
          { name: "Root Touch-up", price: "$65" },
          { name: "Root touch up", price: "$60" },
          { name: "Shoulder length", price: "$70" },
          { name: "Mid back", price: "$80" },
          { name: "Shoulder Ombre", price: "$90" },
          { name: "Waist length", price: "$110" },
          { name: "Lower back", price: "$120" },
          { name: "Down to ballroom", price: "$140" },
          { name: "Foilayage", price: "$160" }
        ]},
        { category: "Ammonia Free Color Services", items: [
          { name: "Root touch up", price: "$70" },
          { name: "Shoulder length", price: "$80" },
          { name: "½ part shoulder", price: "$60" },
          { name: "Shoulder foilays", price: "$90" },
          { name: "Mid back", price: "$100" },
          { name: "Waist length", price: "$110" },
          { name: "Lower back", price: "$120" },
          { name: "Down to ballroom", price: "$140" },
          { name: "Foilayage", price: "$160" }
        ]},
        { category: "Highlight & Lowlight Services", items: [
          { name: "Full Head Highlights", price: "$140" },
          { name: "Full head neck line", price: "$70" },
          { name: "Full head shoulder length", price: "$90" },
          { name: "Full head ½ past shoulder", price: "$100" },
          { name: "Full head mid back", price: "$110" },
          { name: "Full head shoulder foilays", price: "$100" },
          { name: "Full head Shoulder foilays", price: "$110" },
          { name: "Full head mid back", price: "$120" },
          { name: "Full head waist back", price: "$130" },
          { name: "Full head waist length", price: "$140" },
          { name: "Full head lower back", price: "$150" },
          { name: "Full head lower back", price: "$160" },
          { name: "Full head down to ballroom", price: "$200" },
          { name: "Full head down to ballroom", price: "$180" }
        ]},
        { category: "Specialty Color Services", items: [
          { name: "Balayage", price: "$180" },
          { name: "½ part shoulder", price: "$100" },
          { name: "Shoulder foilays", price: "$120" },
          { name: "Mid back", price: "$140" },
          { name: "Waist length", price: "$160" },
          { name: "Lower back", price: "$180" },
          { name: "Down to ballroom", price: "$200" },
          { name: "Full foxing", price: "$220" }
        ]},
        { category: "Toning Services", items: [
          { name: "Neck line", price: "$30" },
          { name: "½ part shoulder", price: "$40" },
          { name: "Shoulder foilays", price: "$50" },
          { name: "Mid back", price: "$60" },
          { name: "Waist length", price: "$70" },
          { name: "Lower back", price: "$80" },
          { name: "Down to ballroom", price: "$90" },
          { name: "Foilayage", price: "$110" }
        ]}
      ]
    },
    services: {
      title: 'Beauty & Spa Services',
      services: [
        { category: "Updo and Makeup Services", items: [
          { name: "Updo", price: "$60" },
          { name: "Party makeup", price: "$50" },
          { name: "Light and party makeup", price: "$40" }
        ]},
        { category: "Threading Services", items: [
          { name: "Eyebrows", price: "$8" },
          { name: "Upper lip", price: "$5" },
          { name: "Chin", price: "$5" },
          { name: "Forehead", price: "$8" },
          { name: "Lower lip", price: "$5" },
          { name: "Cheeks", price: "$10" },
          { name: "Sideburn", price: "$10" },
          { name: "Full face", price: "$35" },
          { name: "Full face with neck", price: "$40" }
        ]}
      ]
    },
    waxing: {
      title: 'Waxing Services',
      services: [
        { category: "Facial Waxing", items: [
          { name: "Eyebrows", price: "$8" },
          { name: "Upper lip", price: "$5" },
          { name: "Lower lip", price: "$5" },
          { name: "Forehead", price: "$8" },
          { name: "Cheeks", price: "$10" },
          { name: "Sideburn", price: "$10" },
          { name: "Full face", price: "$35" },
          { name: "Full face with neck", price: "$40" }
        ]},
        { category: "Body Waxing", items: [
          { name: "Full arms", price: "$35" },
          { name: "Half arms", price: "$25" },
          { name: "Under arms", price: "$15" },
          { name: "Full leg", price: "$45" },
          { name: "Half leg", price: "$30" },
          { name: "Bikini", price: "$40" },
          { name: "Brazilian", price: "$60" },
          { name: "Shoulders", price: "$20" },
          { name: "Full back", price: "$40" },
          { name: "Half back", price: "$25" },
          { name: "Full stomach", price: "$25" },
          { name: "Half stomach", price: "$15" },
          { name: "Belly button", price: "$8" },
          { name: "Chest", price: "$30" },
          { name: "Toes", price: "$10" },
          { name: "Full body", price: "$180" }
        ]},
        { category: "Men's Waxing", items: [
          { name: "Eyebrows", price: "$8" },
          { name: "Shoulder waxing", price: "$20" },
          { name: "Back waxing", price: "$35" },
          { name: "Chest waxing", price: "$30" },
          { name: "Arm waxing", price: "$30" },
          { name: "Ears wax", price: "$8" }
        ]}
      ]
    }
  };

  const isPopularService = (serviceName: string) => {
    return popularServices.includes(serviceName);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Services & Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional hair services with transparent pricing. All services include consultation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {Object.entries(serviceCategories).map(([key, category]) => (
            <div key={key} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(key)}
                className="w-full px-6 py-4 bg-gradient-to-r from-rose-50 to-amber-50 flex justify-between items-center hover:from-rose-100 hover:to-amber-100 transition-all duration-300"
              >
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  {category.title}
                </h2>
                {openSections.includes(key) ? (
                  <ChevronUp className="w-6 h-6 text-rose-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-rose-600" />
                )}
              </button>

              {openSections.includes(key) && (
                <div className="p-6 bg-white">
                  {category.services.map((serviceGroup, groupIndex) => (
                    <div key={groupIndex} className="mb-8 last:mb-0">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                        {serviceGroup.category}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {serviceGroup.items.map((service, serviceIndex) => {
                          const isPopular = isPopularService(service.name);
                          return (
                            <div 
                              key={serviceIndex} 
                              className={`flex justify-between items-center p-3 rounded-lg transition-colors duration-200 ${
                                isPopular 
                                  ? 'bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200' 
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              <span className={`${isPopular ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                                {service.name}
                                {isPopular && <span className="ml-2 text-xs bg-rose-600 text-white px-2 py-1 rounded-full">Popular</span>}
                              </span>
                              <span className="text-rose-600 font-semibold">{service.price}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

{/* Additional Information */}
<div className="mt-16 bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg p-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
        Important Notes
      </h3>
      <ul className="text-gray-600 space-y-2">
        <li>• All prices are starting prices and may vary based on hair length and condition</li>
        <li>• Color correction pricing determined after consultation</li>
        <li>• Extension prices vary based on hair type and length needed</li>
        <li>• Bridal services require advance booking and trial recommended</li>
        <li>• On-location services include travel fee</li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
        Book Your Service
      </h3>
      <p className="text-gray-600 mb-6">
        Ready to schedule your appointment? Contact us for a consultation or book online.
      </p>
      <div className="space-y-3">
        <button
          onClick={() => setIsLocationSelectorOpen(true)}
          className="inline-block w-full md:w-auto bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full text-center transition-colors duration-300"
        >
          Call Us
        </button>
        <Link
          to="/contact"
          className="inline-block w-full md:w-auto ml-0 md:ml-4 border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white font-semibold px-8 py-3 rounded-full text-center transition-all duration-300"
        >
          Contact
        </Link>
      </div>
    </div>
  </div>
</div>
</div>

      
      <LocationSelector 
        isOpen={isLocationSelectorOpen}
        onClose={() => setIsLocationSelectorOpen(false)}
      />
    </div>
  );
};

export default Services;