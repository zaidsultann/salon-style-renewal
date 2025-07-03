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
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return showMessage('First name is required');
    if (!formData.lastName.trim()) return showMessage('Last name is required');
    if (!formData.email.trim()) return showMessage('Email is required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return showMessage('Invalid email address');
    if (!formData.phone.trim()) return showMessage('Phone number is required');
    if (!formData.message.trim()) return showMessage('Message is required');
    return true;
  };

  const showMessage = (text: string, type = 'error') => {
    setMessage({ text, type });
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const data = new FormData();
      data.append('form-name', 'salon-style-renewal');
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString()
      });

      showMessage("Your message has been sent successfully. We'll get back to you soon!", 'success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    } catch {
      showMessage('Failed to send message. Please try again or call us directly.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
          Send Us a Message
        </h2>

        {message.text && (
          <div className={`mb-4 p-4 rounded-lg ${
            message.type === 'error' ? 'bg-red-50 border border-red-200 text-red-700' :
            'bg-green-50 border border-green-200 text-green-700'
          }`}>
            {message.text}
          </div>
        )}

        {/* Netlify’s hidden dummy form for build-time detection */}
        <form name="salon-style-renewal" data-netlify="true" hidden>
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message" />
        </form>

        {/* Actual visible form */}
        <form onSubmit={handleSubmit} name="salon-style-renewal" data-netlify="true" className="space-y-6">
          <input type="hidden" name="form-name" value="salon-style-renewal" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
              <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
              <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
            <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <Textarea name="message" value={formData.message} onChange={handleChange} rows={4} required />
          </div>
          <div className="text-center">
            <Button type="submit" disabled={isLoading} className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
