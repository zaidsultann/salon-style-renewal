import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toasts, setToasts] = useState([]);

  const showToast = (title, description, variant = 'default') => {
    const id = Date.now();
    const newToast = { id, title, description, variant };
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove toast after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      showToast("Error", "First name is required", "destructive");
      return false;
    }
    if (!formData.lastName.trim()) {
      showToast("Error", "Last name is required", "destructive");
      return false;
    }
    if (!formData.email.trim()) {
      showToast("Error", "Email is required", "destructive");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      showToast("Error", "Please enter a valid email address", "destructive");
      return false;
    }
    if (!formData.phone.trim()) {
      showToast("Error", "Phone number is required", "destructive");
      return false;
    }
    if (!formData.message.trim()) {
      showToast("Error", "Message is required", "destructive");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'firstName': formData.firstName,
          'lastName': formData.lastName,
          'email': formData.email,
          'phone': formData.phone,
          'message': formData.message
        }).toString()
      });

      if (response.ok) {
        showToast("Success!", "Your message has been sent successfully. We'll get back to you soon!");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      showToast("Error", "Failed to send message. Please try again or call us directly.", "destructive");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Toast notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 ${
              toast.variant === 'destructive' 
                ? 'bg-red-500 text-white' 
                : 'bg-green-500 text-white'
            }`}
          >
            <div className="font-semibold">{toast.title}</div>
            <div className="text-sm opacity-90">{toast.description}</div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
          Send Us a Message
        </h2>
        
        {/* Hidden form for Netlify detection */}
        <form name="contact" data-netlify="true" hidden>
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message"></textarea>
        </form>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone *
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full"
              required
            />
          </div>
          <div className="text-center">
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;