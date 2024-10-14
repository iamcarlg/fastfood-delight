import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'; // Chemin vers l'image du logo
import './css/Header.css'; // Créez un fichier CSS pour le header

function Header() {
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler l'affichage du menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterne l'état d'ouverture du menu
  };

  return (
    <header className="header">
      <img src={logo} alt="FastFood Delight Logo" className="logo" />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={isOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
