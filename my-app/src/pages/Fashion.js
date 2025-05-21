// src/pages/Fashion.js
import React from "react";
import { useCart } from "../context/CartContext";
import "./Fashion.css";

const fashionData = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    price: 1499,
    image: "/images/shopping.webp",
  },
  {
    id: 2,
    name: "Women's Dress",
    price: 2299,
    image: "/images/shopping1.webp",
  },
  {
    id: 3,
    name: "Unisex Sneakers",
    price: 2999,
    image: "/images/shopping3.webp",
  },
];

const Fashion = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="fashion-container">
      <h1>Fashion</h1>
      <div className="fashion-grid">
        {fashionData.map((item) => (
          <div className="fashion-card" key={item.id}>
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

export default Fashion;