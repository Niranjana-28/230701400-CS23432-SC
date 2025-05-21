// src/pages/HomeAppliances.js
import React from "react";
import { useCart } from "../context/CartContext";
import "./HomeAppliances.css";

const appliancesData = [
  {
    id: 1,
    name: "LG Washing Machine",
    price: 25990,
    image: "/images/download.webp",
  },
  {
    id: 2,
    name: "Samsung Refrigerator",
    price: 32999,
    image: "/images/81MNzBOxopL.jpg",
  },
  {
    id: 3,
    name: "Philips Air Fryer",
    price: 8499,
    image: "/images/download3.webp",
  },
 {
    id: 3,
    name: "Philips Air Fryer",
    price: 8499,
    image: "/images/download3.webp",
  },

];


const HomeAppliances = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="appliances-container">
      <h1>Home Appliances</h1>
      <div className="appliances-grid">
        {appliancesData.map((item) => (
          <div className="appliance-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price.toLocaleString()}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAppliances;
