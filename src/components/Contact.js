import React, { useState } from 'react';
import './css/Contact.css'; // Assurez-vous que ce fichier CSS est créé

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h3>Our Contact Information</h3>
        <p>Email: contact@fastfooddelight.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>
    </div>
  );
}

export default Contact;
