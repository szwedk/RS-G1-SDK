'use client';

import { useState } from 'react';

//  form submits to pages/api/send-inquiry 


export default function G1InquiriesPage() {
  const [form, setForm] = useState({
    product: '',
    message: '',
    hasPurchased: false,
    isInterested: false,
    orderNumber: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' && e.target instanceof HTMLInputElement ? e.target.checked : undefined;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/send-inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    alert('Your inquiry has been sent.');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="bg-[#112233]/50 backdrop-blur-lg shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Speak to an Expert</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold">Product</label>
          <select
            name="product"
            value={form.product}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Select a product</option>
            <option value="G1 Basic">G1 Basic</option>
            <option value="G1 EDU">G1 EDU</option>
            <option value="G1 Accessories">G1 Accessories</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
            required
          />
        </div>
        <div className="flex items-center space-x-3">
          <label className="relative inline-flex items-center h-6 w-11 cursor-pointer">
            <input
              type="checkbox"
              name="isInterested"
              checked={form.isInterested}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#DB9D47] transition-colors duration-300" />
            <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow transform peer-checked:translate-x-full transition-transform duration-300" />
          </label>
          <span className="text-sm">Interested in purchasing</span>
        </div>
        <div className="flex items-center space-x-3">
          <label className="relative inline-flex items-center h-6 w-11 cursor-pointer">
            <input
              type="checkbox"
              name="hasPurchased"
              checked={form.hasPurchased}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#DB9D47] transition-colors duration-300" />
            <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow transform peer-checked:translate-x-full transition-transform duration-300" />
          </label>
          <span className="text-sm">Purchased before</span>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Order Number (if applicable)</label>
          <input
            type="text"
            name="orderNumber"
            value={form.orderNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-[#DB9D47] text-[#040F16] font-semibold px-6 py-2 rounded hover:opacity-90"
        >
          Submit Inquiry
        </button>
        </form>
      </div>
    </div>
  );
}
