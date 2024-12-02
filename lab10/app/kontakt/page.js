'use client';

import { useState } from 'react';
import Button from '@/components/Button'; 
export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Proszę wypełnić wszystkie pola!');
      return;
    }

    try {
      console.log('Wysłano formularz:', formData);

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setError('');
    } catch (error) {
      setError('Wystąpił błąd przy wysyłaniu formularza!');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Kontakt</h1>

      {isSubmitted ? (
        <p style={{ color: 'green' }}>Dziękujemy! Twój formularz został wysłany.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div>
            <label htmlFor="name">Imię:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div>
            <label htmlFor="email">Adres e-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div>
            <label htmlFor="subject">Temat:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div>
            <label htmlFor="message">Wiadomość:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                minHeight: '150px',
              }}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}

      
          <Button type="submit">
            Wyślij
          </Button>
        </form>
      )}
    </div>
  );
}
