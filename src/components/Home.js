import React from 'react';
import heroImage from '../assets/hero-image.webp'; // Image de fond
import burgerImage from '../assets/burger.webp'; // Image du burger
import friesImage from '../assets/fries.webp'; // Image des frites
import drinkImage from '../assets/drink.webp'; // Image de boisson
import './Home.css'; // Importer le fichier CSS pour les styles spécifiques

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <img src={heroImage} alt="Hero" />
        <div className="overlay">
          <h1>Welcome to FastFood Delight</h1>
          <p>Fresh. Fast. Delicious.</p>
          <button className="cta-button">View Menu</button>
        </div>
      </div>

      <div className="cards-section">
        <div className="cards-container">
          <div className="card">
            <img src={burgerImage} alt="Burger" className="card-image" />
            <h3>Burger</h3>
            <p>Juicy and delicious burger made with fresh ingredients.</p>
            <button className="card-button">Order Now</button>
          </div>
          <div className="card">
            <img src={friesImage} alt="Fries" className="card-image" />
            <h3>Fries</h3>
            <p>Crispy golden fries, the perfect side dish.</p>
            <button className="card-button">Add to Order</button>
          </div>
          <div className="card">
            <img src={drinkImage} alt="Drink" className="card-image" />
            <h3>Drinks</h3>
            <p>Refresh yourself with our variety of drinks.</p>
            <button className="card-button">Get a Drink</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
