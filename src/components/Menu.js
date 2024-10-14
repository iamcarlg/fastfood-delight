import React from 'react';
import burgerImage from '../assets/burger-1.webp'; // Image du burger
import chickenNuggetsImage from '../assets/chicken-nuggets.webp'; // Image des nuggets
import friesImage from '../assets/fries-1.webp'; // Image des frites
import drinkImage from '../assets/drink-1.webp'; // Image de boisson
import iceCreamImage from '../assets/ice-cream.webp'; // Image de glace
import './css/Menu.css'; // Importer le fichier CSS pour le menu

function Menu() {
  const menuItems = [
    {
      name: "Burger",
      description: "Deliciously juicy burger with fresh ingredients.",
      price: "$5.99",
      image: burgerImage,
    },
    {
      name: "Chicken Nuggets",
      description: "Crispy chicken nuggets served with dipping sauce.",
      price: "$4.99",
      image: chickenNuggetsImage,
    },
    {
      name: "Fries",
      description: "Crispy golden fries, the perfect side dish.",
      price: "$2.99",
      image: friesImage,
    },
    {
      name: "Soft Drink",
      description: "Refreshing soft drinks available in various flavors.",
      price: "$1.99",
      image: drinkImage,
    },
    {
      name: "Ice Cream",
      description: "Indulge in our creamy and delicious ice cream.",
      price: "$2.49",
      image: iceCreamImage,
    },
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <h3>{item.name}</h3>
            <p className="description">{item.description}</p>
            <p className="price">{item.price}</p>
            <button className="menu-button">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
