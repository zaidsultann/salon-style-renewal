
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
    { name: "Root Touch-up", price: "$65", category: "Popular" }
  ];

  const serviceCategories = [
    {
      title: 'Men\'s Services',
      services: [
        { name: "Men's Haircut", price: "$35", category: "Men's Services" },
        { name: "Men's Haircut & Shampoo", price: "$40", category: "Men's Services" },
        { name: "Men's Clipper Cut", price: "$30", category: "Men's Services" },
        { name: "Beard Trim", price: "$15", category: "Men's Services" },
        { name: "Mustache Trim", price: "$10", category: "Men's Services" },
        { name: "Hot Towel Shave", price: "$25", category: "Men's Services" }
      ]
    },
    {
      title: 'Women\'s Hair Services',
      services: [
        { name: "Women's Haircut", price: "$65", category: "Women's Services" },
        { name: "Women's Haircut & Blowdry", price: "$85", category: "Women's Services" },
        { name: "Shampoo & Blowdry", price: "$45", category: "Women's Services" },
        { name: "Deep Conditioning Treatment", price: "$25", category: "Women's Services" },
        { name: "Hair Styling (Special Events)", price: "$75", category: "Women's Services" },
        { name: "Updo/Formal Styling", price: "$95", category: "Women's Services" }
      ]
    },
    {
      title: 'Hair Coloring',
      services: [
        { name: "Single Process Color", price: "$85", category: "Hair Coloring" },
        { name: "Double Process Color", price: "$150", category: "Hair Coloring" },
        { name: "All Over Bleach", price: "$120", category: "Hair Coloring" },
        { name: "Color Correction", price: "$200+", category: "Hair Coloring" },
        { name: "Root Touch-up", price: "$65", category: "Hair Coloring" },
        { name: "Gray Coverage", price: "$75", category: "Hair Coloring" }
      ]
    },
    {
      title: 'Highlights & Lowlights',
      services: [
        { name: "Full Head Highlights", price: "$140", category: "Highlights" },
        { name: "Partial Highlights", price: "$95", category: "Highlights" },
        { name: "Cap Highlights", price: "$85", category: "Highlights" },
        { name: "Foil Highlights", price: "$120", category: "Highlights" },
        { name: "Balayage", price: "$180", category: "Highlights" },
        { name: "Ombre", price: "$160", category: "Highlights" },
        { name: "Lowlights", price: "$110", category: "Highlights" }
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
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Select Services</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
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

        <div className="flex justify-end gap-3 pt-4 border-t">
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
