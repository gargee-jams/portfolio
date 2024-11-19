// pages/contact.js
"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Add form handling logic here (e.g., send email or save the data)
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
