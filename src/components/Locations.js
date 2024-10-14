import React from 'react';
import './css/Locations.css'; // Créez un fichier CSS pour styliser cette page

const locationsData = [
  {
    id: 1,
    name: "Main Street",
    address: "123 Main St, City, Country",
    phone: "(123) 456-7890",
    image: require("../assets/location-1.webp"), // Remplacez par le chemin de votre image
  },
  {
    id: 2,
    name: "Elm Street",
    address: "456 Elm St, City, Country",
    phone: "(123) 987-6543",
    image: require("../assets/location-2.webp"), // Remplacez par le chemin de votre image
  },
  {
    id: 3,
    name: "Oak Street",
    address: "789 Oak St, City, Country",
    phone: "(123) 321-4321",
    image: require("../assets/location-3.webp"), // Remplacez par le chemin de votre image
  },
];

function Locations() {
  return (
    <div className="locations">
      <h2>Our Locations</h2>
      <div className="locations-container">
        {locationsData.map((location) => (
          <div className="location-card" key={location.id}>
            <img src={location.image} alt={location.name} className="location-image" />
            <h3>{location.name}</h3>
            <p>{location.address}</p>
            <p>Phone: {location.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;
