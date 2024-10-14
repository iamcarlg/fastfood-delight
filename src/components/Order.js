import React, { useState } from 'react';
import burgerImage from '../assets/burger-1.webp'; // Image du burger
import chickenNuggetsImage from '../assets/chicken-nuggets.webp'; // Image des nuggets
import friesImage from '../assets/fries-1.webp'; // Image des frites
import drinkImage from '../assets/drink-1.webp'; // Image de boisson
import iceCreamImage from '../assets/ice-cream.webp'; // Image de glace
import './css/Order.css'; // Importer le fichier CSS pour les styles spécifiques

function Order() {
  const menuItems = [
    {
      id: 1,
      name: "Burger",
      description: "Deliciously juicy burger with fresh ingredients.",
      price: "$5.99",
      image: burgerImage,
    },
    {
      id: 2,
      name: "Chicken Nuggets",
      description: "Crispy chicken nuggets served with dipping sauce.",
      price: "$4.99",
      image: chickenNuggetsImage,
    },
    {
      id: 3,
      name: "Fries",
      description: "Crispy golden fries, the perfect side dish.",
      price: "$2.99",
      image: friesImage,
    },
    {
      id: 4,
      name: "Soft Drink",
      description: "Refreshing soft drinks available in various flavors.",
      price: "$1.99",
      image: drinkImage,
    },
    {
      id: 5,
      name: "Ice Cream",
      description: "Indulge in our creamy and delicious ice cream.",
      price: "$2.49",
      image: iceCreamImage,
    },
  ];

  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  const addToOrder = (item) => {
    setOrder([...order, item]);
    setTotal(total + parseFloat(item.price.slice(1))); // Retire le dollar et convertit en nombre
  };

  const placeOrder = () => {
    alert("Order placed successfully!");
    setOrder([]); // Réinitialiser la commande
    setTotal(0); // Réinitialiser le total
  };

  return (
    <div className="order">
      <h2>Order Online</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <h3>{item.name}</h3>
            <p className="description">{item.description}</p>
            <p className="price">{item.price}</p>
            <button className="menu-button" onClick={() => addToOrder(item)}>Add to Order</button>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {order.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
        </ul>
        <h4>Total: ${total.toFixed(2)}</h4>
        <button className="place-order-button" onClick={placeOrder} disabled={order.length === 0}>Place Order</button>
      </div>
    </div>
  );
}

export default Order;
