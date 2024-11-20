import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE_MUTATION } from '../Mutations/contactUs.mutation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sendMessage, { loading, error }] = useMutation(SEND_MESSAGE_MUTATION);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    // Email validation with regex
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const { data } = await sendMessage({
        variables: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      });
      toast.success('Your message has been sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      toast.error('Error submitting the form, Try again');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-none xmd:shadow-lg dark:bg-gray-800 xmd:dark:bg-gray-900 bg-gray-100 xmd:bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          We would love to hear from you. Please fill out the form below to get
          in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-700 dark:text-gray-300 font-semibold"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 p-2 border rounded-md border-gray-300 dark:text-white dark:border-white dark:bg-gray-900"
              />
              {errors.name && (
                <small className="text-red-600">{errors.name}</small>
              )}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 dark:text-gray-300 font-semibold"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-2 border rounded-md border-gray-300 dark:text-white dark:border-white dark:bg-gray-900"
              />
              {errors.email && (
                <small className="text-red-600">{errors.email}</small>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-gray-700 dark:text-gray-300 font-semibold"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 p-2 border rounded-md border-gray-300 dark:text-white dark:border-white dark:bg-gray-900"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-gray-700 dark:text-gray-300 font-semibold"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-2 border rounded-md border-gray-300 dark:text-white dark:border-white dark:bg-gray-900"
              rows={4}
            />
            {errors.message && (
              <small className="text-red-600">{errors.message}</small>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-2 bg-primary text-white font-semibold rounded-lg focus:outline-none"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
