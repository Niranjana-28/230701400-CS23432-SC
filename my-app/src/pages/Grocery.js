// src/pages/Grocery.js
import React from "react";
import { useCart } from "../context/CartContext";
import "./Grocery.css";

const groceryData = [
  {
    id: 1,
    name: "Rice (5kg)",
    price: 350,
    image: "/images/g2.webp",
  },
  {
    id: 2,
    name: "Sunflower Oil (1L)",
    price: 120,
    image: "/images/g1.webp",
  },
  {
    id: 3,
    name: "Toor Dal (1kg)",
    price: 180,
    image: "/images/g3.webp",
  },
];

const Grocery = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="grocery-container">
      <h1>Grocery</h1>
      <div className="grocery-grid">
        {groceryData.map((item) => (
          <div className="grocery-card" key={item.id}>
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

export default Grocery;
