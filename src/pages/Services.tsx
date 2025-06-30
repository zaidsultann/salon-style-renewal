import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [openSections, setOpenSections] = useState<string[]>(['cuts']);
  const navigate = useNavigate();

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleBookService = (serviceName: string, servicePrice: string) => {
    // Navigate to booking page with pre-selected service
    navigate('/booking', { 
      state: { 
        preselectedService: { 
          name: serviceName, 
          price: servicePrice,
          category: 'Pre-selected'
        } 
      } 
    });
  };

  const serviceCategories = {
    cuts: {
      title: 'Hair Cuts & Styling',
      services: [
        // Men's Services
        { category: "Men's Services", items: [
          { name: "Men's Haircut", price: "$35" },
          { name: "Men's Haircut & Shampoo", price: "$40" },
          { name: "Men's Clipper Cut", price: "$30" },
          { name: "Beard Trim", price: "$15" },
          { name: "Mustache Trim", price: "$10" },
          { name: "Hot Towel Shave", price: "$25" }
        ]},
        // Women's Hair Services  
        { category: "Women's Hair Services", items: [
          { name: "Women's Haircut", price: "$65" }, 
          { name: "Women's Haircut & Blowdry", price: "$85" },
          { name: "Shampoo & Blowdry", price: "$45" },
          { name: "Deep Conditioning Treatment", price: "$25" },
          { name: "Hair Styling (Special Events)", price: "$75" },
          { name: "Updo/Formal Styling", price: "$95" }
        ]},
        // Children's Services
        { category: "Children's Services", items: [
          { name: "Child Haircut (12 & under)", price: "$25" },
          { name: "Child Haircut (13-17)", price: "$35" },
          { name: "Bang Trim", price: "$15" }
        ]}
      ]
    },
    coloring: {
      title: 'Hair Coloring & Chemical Services',
      services: [
        // Full Color Services
        { category: "Full Color Services", items: [
          { name: "Single Process Color", price: "$85" },
          { name: "Double Process Color", price: "$150" },
          { name: "All Over Bleach", price: "$120" },
          { name: "Color Correction", price: "$200+" },
          { name: "Root Touch-up", price: "$65" },
          { name: "Gray Coverage", price: "$75" }
        ]},
        // Highlight Services
        { category: "Highlight & Lowlight Services", items: [
          { name: "Full Head Highlights", price: "$140" },
          { name: "Partial Highlights", price: "$95" },
          { name: "Cap Highlights", price: "$85" },
          { name: "Foil Highlights", price: "$120" },
          { name: "Balayage", price: "$180" },
          { name: "Ombre", price: "$160" },
          { name: "Lowlights", price: "$110" }
        ]},
        // Specialty Color
        { category: "Specialty Color Services", items: [
          { name: "Fashion Colors", price: "$100+" },
          { name: "Color Gloss/Glaze", price: "$45" },
          { name: "Toner Application", price: "$35" },
          { name: "Color Refresh", price: "$55" }
        ]}
      ]
    },
    chemical: {
      title: 'Chemical Services & Treatments',
      services: [
        // Perming Services
        { category: "Perming Services", items: [
          { name: "Body Wave", price: "$95" },
          { name: "Spiral Perm", price: "$120" },
          { name: "Partial Perm", price: "$75" },
          { name: "Digital Perm", price: "$200" }
        ]},
        // Relaxing Services
        { category: "Relaxing & Straightening", items: [
          { name: "Chemical Relaxer", price: "$85" },
          { name: "Keratin Treatment", price: "$250" },
          { name: "Japanese Straightening", price: "$300" },
          { name: "Brazilian Blowout", price: "$200" }
        ]},
        // Hair Treatments
        { category: "Hair Treatments", items: [
          { name: "Deep Conditioning Mask", price: "$35" },
          { name: "Protein Treatment", price: "$45" },
          { name: "Scalp Treatment", price: "$40" },
          { name: "Hot Oil Treatment", price: "$30" },
          { name: "Olaplex Treatment", price: "$55" }
        ]}
      ]
    },
    extensions: {
      title: 'Hair Extensions & Add-ons',
      services: [
        // Extension Services
        { category: "Hair Extension Services", items: [
          { name: "Tape-in Extensions", price: "$200+" },
          { name: "Clip-in Extensions (Install)", price: "$50" },
          { name: "Sew-in Extensions", price: "$150+" },
          { name: "Fusion Extensions", price: "$300+" },
          { name: "Extension Removal", price: "$75" },
          { name: "Extension Maintenance", price: "$100" }
        ]},
        // Specialty Services
        { category: "Specialty Add-on Services", items: [
          { name: "Hair Tinsel/Glitter", price: "$25" },
          { name: "Temporary Color", price: "$35" },
          { name: "Hair Chalk", price: "$20" },
          { name: "Braiding Service", price: "$45+" }
        ]}
      ]
    },
    bridal: {
      title: 'Bridal & Special Events',
      services: [
        // Bridal Services
        { category: "Bridal Hair Services", items: [
          { name: "Bridal Hair Trial", price: "$85" },
          { name: "Bridal Hair (Wedding Day)", price: "$150" },
          { name: "Bridesmaid Hair", price: "$75" },
          { name: "Mother of Bride/Groom Hair", price: "$85" },
          { name: "Flower Girl Hair", price: "$45" }
        ]},
        // Special Event Services
        { category: "Special Event Services", items: [
          { name: "Prom/Formal Hair", price: "$95" },
          { name: "Special Occasion Updo", price: "$85" },
          { name: "Photo Shoot Hair", price: "$120" },
          { name: "On-Location Services", price: "$150+" }
        ]}
      ]
    }
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

        {/* Service Categories */}
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
                        {serviceGroup.items.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
                            <div className="flex-1">
                              <span className="text-gray-700">{service.name}</span>
                              <span className="text-rose-600 font-semibold ml-4">{service.price}</span>
                            </div>
                            <button
                              onClick={() => handleBookService(service.name, service.price)}
                              className="ml-4 bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            >
                              <Calendar className="w-3 h-3" />
                              Book
                            </button>
                          </div>
                        ))}
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
                <a
                  href="/booking"
                  className="inline-block w-full md:w-auto bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full text-center transition-colors duration-300"
                >
                  Book Online
                </a>
                <a
                  href="tel:905-555-4567"
                  className="inline-block w-full md:w-auto ml-0 md:ml-4 border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white font-semibold px-8 py-3 rounded-full text-center transition-all duration-300"
                >
                  Call (905) 555-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
