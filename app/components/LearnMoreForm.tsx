import React, { useState } from 'react';

interface LearnMoreFormProps {
  isOpen: boolean;
  onClose: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

export default function LearnMoreForm({ isOpen, onClose, onInputChange, onSubmit }: LearnMoreFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phone: '', query: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
      isValid = false;
    }

    if (!formData.query.trim()) {
      newErrors.query = 'Query is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate submission with a random delay between 2 and 3 seconds
        const delay = Math.random() * 1000 + 2000; // Random delay between 2000ms and 3000ms
        await new Promise(resolve => setTimeout(resolve, delay));

        setShowConfirmation(true);
      } catch (error) {
        console.error('Simulated error:', error);
        alert('Failed to submit the form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    setFormData({ name: '', email: '', phone: '', query: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
        {showConfirmation ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="mb-6">Your request has been successfully submitted.</p>
            <button
              onClick={handleConfirmationClose}
              className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              OK
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-gray-900 text-xl font-medium title-font">Get In Touch</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="leading-relaxed mb-5 text-gray-600">Please fill in the details below to get access to our AI-powered solutions.</p>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 mt-4">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                  className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 mt-4">Contact Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={onInputChange}
                  className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                
                <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1 mt-4">Your Query *</label>
                <textarea
                  id="query"
                  name="query"
                  rows={4}
                  value={formData.query}
                  onChange={onInputChange}
                  className={`w-full px-3 py-2 border ${errors.query ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.query && <p className="mt-1 text-xs text-red-500">{errors.query}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">We respect your privacy and will never share your information.</p>
          </>
        )}
      </div>
    </div>
  );
};