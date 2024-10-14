import React from 'react';
import './css/About.css'; // Assurez-vous que ce fichier CSS est créé
import logo from '../assets/logo.webp'; // Chemin vers l'image du logo
function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <div className="about-content">
        <img src={logo} alt="FastFood Delight" className="about-image" height={300} /> {/* Remplacez par votre image */}
        <p>
          Welcome to FastFood Delight, where we believe in serving the freshest and most delicious fast food options.
        </p>
        <p>
          Our mission is to provide high-quality meals that bring joy to our customers. 
          We use only the best ingredients to prepare our food, ensuring that every bite is bursting with flavor.
        </p>
      </div>
      <h3>Why Choose Us?</h3>
      <ul className="features">
        <li>🌱 Fresh Ingredients</li>
        <li>👩‍🍳 Expertly Crafted Meals</li>
        <li>🏆 Exceptional Service</li>
        <li>🍔 Variety of Menu Options</li>
      </ul>
      <h3>Customer Testimonials</h3>
      <div className="testimonials">
        <blockquote>"The best fast food in town! Always fresh and delicious!" - Jane Doe</blockquote>
        <blockquote>"FastFood Delight never disappoints! Highly recommend!" - John Smith</blockquote>
      </div>
    </div>
  );
}

export default About;
