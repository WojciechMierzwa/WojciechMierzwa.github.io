import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Dziękujemy za kontakt!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Kontakt</h1>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Imię"
          className="border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-300 p-2 rounded"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Wiadomość"
          className="border border-gray-300 p-2 rounded"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default Contact;
