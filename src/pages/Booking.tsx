
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import ServiceSelectionDialog from '@/components/ServiceSelectionDialog';
import { Plus, X } from 'lucide-react';

interface Service {
  name: string;
  price: string;
  category: string;
}

const Booking = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  // Handle pre-selected service from Services page
  useEffect(() => {
    if (location.state?.preselectedService) {
      setSelectedServices([location.state.preselectedService]);
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedServices.length === 0) {
      toast({
        title: "Please select at least one service",
        description: "You must select a service to book an appointment.",
        variant: "destructive"
      });
      return;
    }

    console.log('Booking submitted:', {
      ...formData,
      services: selectedServices
    });
    
    toast({
      title: "Booking Request Submitted!",
      description: `We'll contact you within 24 hours to confirm your appointment for ${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''}.`,
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
    setSelectedServices([]);
  };

  const removeService = (serviceName: string) => {
    setSelectedServices(selectedServices.filter(s => s.name !== serviceName));
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, service) => {
      const price = parseFloat(service.price.replace(/[^0-9.]/g, '')) || 0;
      return total + price;
    }, 0);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-rose-50 to-amber-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600">
            Schedule your visit and let us create the perfect look for you
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Services * {selectedServices.length > 0 && (
                  <span className="text-rose-600">({selectedServices.length} selected)</span>
                )}
              </label>
              
              {/* Selected Services Display */}
              {selectedServices.length > 0 && (
                <div className="mb-4 p-4 bg-rose-50 rounded-lg">
                  <div className="space-y-2">
                    {selectedServices.map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-white rounded border">
                        <div>
                          <span className="font-medium text-gray-900">{service.name}</span>
                          <span className="text-rose-600 font-semibold ml-2">{service.price}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeService(service.name)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <div className="text-right pt-2 border-t">
                      <span className="text-lg font-semibold text-gray-900">
                        Estimated Total: ${calculateTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Service Selection Buttons */}
              <div className="space-y-3">
                <ServiceSelectionDialog
                  selectedServices={selectedServices}
                  onServicesChange={setSelectedServices}
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full py-3 border-2 border-dashed border-gray-300 hover:border-rose-500 hover:bg-rose-50"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    {selectedServices.length === 0 ? 'Select Services' : 'Add More Services'}
                  </Button>
                </ServiceSelectionDialog>
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requests or questions about your selected services?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-lg"
              >
                Submit Booking Request
                {selectedServices.length > 0 && (
                  <span className="ml-2">
                    (${calculateTotal().toFixed(2)} est.)
                  </span>
                )}
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-2">
              Prefer to call? Contact us directly:
            </p>
            <a
              href="tel:905-555-4567"
              className="text-rose-600 font-semibold text-lg hover:text-rose-700"
            >
              (905) 555-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
