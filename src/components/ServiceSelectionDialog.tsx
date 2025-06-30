
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

interface Service {
  name: string;
  price: string;
  category: string;
}

interface ServiceSelectionDialogProps {
  selectedServices: Service[];
  onServicesChange: (services: Service[]) => void;
  children: React.ReactNode;
}

const ServiceSelectionDialog = ({ selectedServices, onServicesChange, children }: ServiceSelectionDialogProps) => {
  const [open, setOpen] = useState(false);

  // Popular/Common services at the top
  const popularServices = [
    { name: "Women's Haircut", price: "$65", category: "Popular" },
    { name: "Men's Haircut", price: "$35", category: "Popular" },
    { name: "Women's Haircut & Blowdry", price: "$85", category: "Popular" },
    { name: "Single Process Color", price: "$85", category: "Popular" },
    { name: "Full Head Highlights", price: "$140", category: "Popular" },
    { name: "Root Touch-up", price: "$65", category: "Popular" },
    { name: "Beard Trim", price: "$15", category: "Popular" },
    { name: "Balayage", price: "$180", category: "Popular" }
  ];

  const serviceCategories = [
    {
      title: 'Styling Services',
      services: [
        { name: "Shoulder length layered cuts", price: "$60", category: "Styling Services" },
        { name: "Shoulder to mid back length cuts", price: "$65", category: "Styling Services" },
        { name: "Waist to buttocks length cuts", price: "$70", category: "Styling Services" },
        { name: "Buttocks length cut", price: "$75", category: "Styling Services" },
        { name: "Shoulder to mid back length/layering", price: "$65", category: "Styling Services" },
        { name: "Mid back to waist length/layering", price: "$70", category: "Styling Services" },
        { name: "Shoulder length blowout", price: "$45", category: "Styling Services" },
        { name: "Shoulder length blowout with curls", price: "$50", category: "Styling Services" },
        { name: "Shoulder to waist blowout with curls", price: "$55", category: "Styling Services" },
        { name: "Waist to ballrooms blowout", price: "$60", category: "Styling Services" },
        { name: "Shoulder length blowout with curls", price: "$50", category: "Styling Services" },
        { name: "Waist to ballrooms blowout with curls", price: "$65", category: "Styling Services" }
      ]
    },
    {
      title: "Women's Hair Services",
      services: [
        { name: "Frual layers", price: "$50", category: "Women's Hair Services" },
        { name: "All over layers", price: "$55", category: "Women's Hair Services" },
        { name: "Bang trim", price: "$15", category: "Women's Hair Services" },
        { name: "Bang trim", price: "$15", category: "Women's Hair Services" },
        { name: "Wash and style", price: "$35", category: "Women's Hair Services" },
        { name: "Wash with full dry", price: "$40", category: "Women's Hair Services" },
        { name: "Wash and blow dry", price: "$35", category: "Women's Hair Services" },
        { name: "Gypsy treatment", price: "$65", category: "Women's Hair Services" },
        { name: "Gels and gellate (½)", price: "$40", category: "Women's Hair Services" },
        { name: "Keratin", price: "$160", category: "Women's Hair Services" }
      ]
    },
    {
      title: 'Colour Services',
      services: [
        { name: "Root touch up", price: "$60", category: "Colour Services" },
        { name: "Shoulder length", price: "$70", category: "Colour Services" },
        { name: "Mid back", price: "$80", category: "Colour Services" },
        { name: "Root touch up", price: "$60", category: "Colour Services" },
        { name: "Shoulder Ombre", price: "$90", category: "Colour Services" },
        { name: "Mid back", price: "$100", category: "Colour Services" },
        { name: "Waist length", price: "$110", category: "Colour Services" },
        { name: "Lower back", price: "$120", category: "Colour Services" },
        { name: "Down to ballroom", price: "$140", category: "Colour Services" },
        { name: "Foilayage", price: "$160", category: "Colour Services" }
      ]
    },
    {
      title: 'Updo and Make Up Services',
      services: [
        { name: "Updo", price: "$60", category: "Updo Services" },
        { name: "Party makeup", price: "$50", category: "Makeup Services" },
        { name: "Light and party makeup", price: "$40", category: "Makeup Services" }
      ]
    },
    {
      title: 'Ammonia Free Colour Services',
      services: [
        { name: "Root touch up", price: "$70", category: "Ammonia Free Services" },
        { name: "Shoulder length", price: "$80", category: "Ammonia Free Services" },
        { name: "½ part shoulder", price: "$60", category: "Ammonia Free Services" },
        { name: "Shoulder foilays", price: "$90", category: "Ammonia Free Services" },
        { name: "Mid back", price: "$100", category: "Ammonia Free Services" },
        { name: "Waist length", price: "$110", category: "Ammonia Free Services" },
        { name: "Lower back", price: "$120", category: "Ammonia Free Services" },
        { name: "Down to ballroom", price: "$140", category: "Ammonia Free Services" },
        { name: "Foilayage", price: "$160", category: "Ammonia Free Services" }
      ]
    },
    {
      title: 'Highlight Services',
      services: [
        { name: "Full head neck line", price: "$70", category: "Highlight Services" },
        { name: "Full head shoulder length", price: "$90", category: "Highlight Services" },
        { name: "Full head shoulder length", price: "$90", category: "Highlight Services" },
        { name: "Full head ½ past shoulder", price: "$100", category: "Highlight Services" },
        { name: "Full head mid back", price: "$110", category: "Highlight Services" },
        { name: "Full head shoulder foilays", price: "$100", category: "Highlight Services" },
        { name: "Full head Shoulder foilays", price: "$110", category: "Highlight Services" },
        { name: "Full head mid back", price: "$120", category: "Highlight Services" },
        { name: "Full head waist back", price: "$130", category: "Highlight Services" },
        { name: "Full head waist length", price: "$140", category: "Highlight Services" },
        { name: "Full head waist length", price: "$140", category: "Highlight Services" },
        { name: "Full head lower back", price: "$150", category: "Highlight Services" },
        { name: "Full head lower back", price: "$160", category: "Highlight Services" },
        { name: "Full head down to ballroom", price: "$200", category: "Highlight Services" },
        { name: "Full head down to ballroom", price: "$180", category: "Highlight Services" }
      ]
    },
    {
      title: 'Ombre and Balayage Services',
      services: [
        { name: "½ part shoulder", price: "$100", category: "Ombre Services" },
        { name: "Shoulder foilays", price: "$120", category: "Ombre Services" },
        { name: "Mid back", price: "$140", category: "Ombre Services" },
        { name: "Waist length", price: "$160", category: "Ombre Services" },
        { name: "Lower back", price: "$180", category: "Ombre Services" },
        { name: "Down to ballroom", price: "$200", category: "Ombre Services" },
        { name: "Full foxing", price: "$220", category: "Ombre Services" }
      ]
    },
    {
      title: 'Toning Services',
      services: [
        { name: "Neck line", price: "$30", category: "Toning Services" },
        { name: "½ part shoulder", price: "$40", category: "Toning Services" },
        { name: "Shoulder foilays", price: "$50", category: "Toning Services" },
        { name: "Mid back", price: "$60", category: "Toning Services" },
        { name: "Waist length", price: "$70", category: "Toning Services" },
        { name: "Lower back", price: "$80", category: "Toning Services" },
        { name: "Down to ballroom", price: "$90", category: "Toning Services" },
        { name: "Foilayage", price: "$110", category: "Toning Services" }
      ]
    },
    {
      title: 'Threading Services',
      services: [
        { name: "Eyebrows", price: "$8", category: "Threading Services" },
        { name: "Upper lip", price: "$5", category: "Threading Services" },
        { name: "Chin", price: "$5", category: "Threading Services" },
        { name: "Forehead", price: "$8", category: "Threading Services" },
        { name: "Lower lip", price: "$5", category: "Threading Services" },
        { name: "Cheeks", price: "$10", category: "Threading Services" },
        { name: "Sideburn", price: "$10", category: "Threading Services" },
        { name: "Full face", price: "$35", category: "Threading Services" },
        { name: "Full face with neck", price: "$40", category: "Threading Services" }
      ]
    },
    {
      title: 'Wax Services',
      services: [
        { name: "Eyebrows", price: "$8", category: "Wax Services" },
        { name: "Upper lip", price: "$5", category: "Wax Services" },
        { name: "Lower lip", price: "$5", category: "Wax Services" },
        { name: "Forehead", price: "$8", category: "Wax Services" },
        { name: "Lower lip", price: "$5", category: "Wax Services" },
        { name: "Cheeks", price: "$10", category: "Wax Services" },
        { name: "Sideburn", price: "$10", category: "Wax Services" },
        { name: "Full face", price: "$35", category: "Wax Services" },
        { name: "Full face with neck", price: "$40", category: "Wax Services" },
        { name: "Full arms", price: "$35", category: "Wax Services" },
        { name: "Half arms", price: "$25", category: "Wax Services" },
        { name: "Under arms", price: "$15", category: "Wax Services" },
        { name: "Full leg", price: "$45", category: "Wax Services" },
        { name: "Half leg", price: "$30", category: "Wax Services" },
        { name: "Bikini", price: "$40", category: "Wax Services" },
        { name: "Brazilian", price: "$60", category: "Wax Services" },
        { name: "Shoulders", price: "$20", category: "Wax Services" },
        { name: "Full back", price: "$40", category: "Wax Services" },
        { name: "Half back", price: "$25", category: "Wax Services" },
        { name: "Full stomach", price: "$25", category: "Wax Services" },
        { name: "Half stomach", price: "$15", category: "Wax Services" },
        { name: "Belly button", price: "$8", category: "Wax Services" },
        { name: "Chest", price: "$30", category: "Wax Services" },
        { name: "Toes", price: "$10", category: "Wax Services" },
        { name: "Full body", price: "$180", category: "Wax Services" }
      ]
    },
    {
      title: "Men's Hair Services",
      services: [
        { name: "Men's regular cut", price: "$25", category: "Men's Hair Services" },
        { name: "Men's regular cut", price: "$25", category: "Men's Hair Services" },
        { name: "Men's cut with shampoo", price: "$30", category: "Men's Hair Services" },
        { name: "Men's basic with shampoo", price: "$25", category: "Men's Hair Services" },
        { name: "Men's style", price: "$30", category: "Men's Hair Services" },
        { name: "Beard trim fringe with moustache", price: "$15", category: "Men's Hair Services" },
        { name: "Beard trim straight with beard", price: "$15", category: "Men's Hair Services" },
        { name: "Moustache trim", price: "$8", category: "Men's Hair Services" },
        { name: "Men's colour", price: "$40", category: "Men's Hair Services" },
        { name: "Men's cut with colour", price: "$50", category: "Men's Hair Services" },
        { name: "Beard and cut colour", price: "$55", category: "Men's Hair Services" },
        { name: "Men's cut and colour", price: "$55", category: "Men's Hair Services" }
      ]
    },
    {
      title: "Men's Wax Services",
      services: [
        { name: "Eyebrows", price: "$8", category: "Men's Wax Services" },
        { name: "Shoulder waxing", price: "$20", category: "Men's Wax Services" },
        { name: "Back waxing", price: "$35", category: "Men's Wax Services" },
        { name: "Chest waxing", price: "$30", category: "Men's Wax Services" },
        { name: "Arm waxing", price: "$30", category: "Men's Wax Services" },
        { name: "Ears wax", price: "$8", category: "Men's Wax Services" }
      ]
    }
  ];

  const toggleService = (service: Service) => {
    const isSelected = selectedServices.some(s => s.name === service.name);
    if (isSelected) {
      onServicesChange(selectedServices.filter(s => s.name !== service.name));
    } else {
      onServicesChange([...selectedServices, service]);
    }
  };

  const removeService = (serviceName: string) => {
    onServicesChange(selectedServices.filter(s => s.name !== serviceName));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Select Services</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
          {/* Selected Services */}
          {selectedServices.length > 0 && (
            <div className="bg-rose-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Selected Services ({selectedServices.length})</h3>
              <div className="flex flex-wrap gap-2">
                {selectedServices.map((service, index) => (
                  <div key={index} className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <span>{service.name} - {service.price}</span>
                    <button
                      onClick={() => removeService(service.name)}
                      className="hover:bg-rose-700 rounded-full p-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Popular Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {popularServices.map((service, index) => {
                const isSelected = selectedServices.some(s => s.name === service.name);
                return (
                  <button
                    key={index}
                    onClick={() => toggleService(service)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      isSelected 
                        ? 'border-rose-500 bg-rose-50 text-rose-700' 
                        : 'border-gray-200 hover:border-rose-300 hover:bg-rose-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{service.name}</span>
                      <span className="text-rose-600 font-semibold">{service.price}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* All Services by Category */}
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.services.map((service, serviceIndex) => {
                  const isSelected = selectedServices.some(s => s.name === service.name);
                  return (
                    <button
                      key={serviceIndex}
                      onClick={() => toggleService(service)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        isSelected 
                          ? 'border-rose-500 bg-rose-50 text-rose-700' 
                          : 'border-gray-200 hover:border-rose-300 hover:bg-rose-50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{service.name}</span>
                        <span className="text-rose-600 font-semibold">{service.price}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Footer */}
        <div className="flex justify-end gap-3 pt-4 border-t bg-white sticky bottom-0">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} className="bg-rose-600 hover:bg-rose-700">
            Done ({selectedServices.length} selected)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceSelectionDialog;
