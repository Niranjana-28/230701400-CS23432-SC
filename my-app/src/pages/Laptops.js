// Example: src/pages/Laptops.js
import React from "react";
import { useCart } from "../context/CartContext";
import "./Laptops.css";

const laptopsData = [
  {
    id: 101,
    name: "MacBook Pro M2",
    price: 169900,
    image: "/images/images2.jpeg",
    url: "https://www.gsmarena.com/apple_macbook_pro_m2-11602.php",
  },
  {
    id: 102,
    name: "Dell XPS 13",
    price: 124999,
    image: "/images/xps-9350-laptop-silver-badge-front_face_2.png",
    url: "https://www.dell.com/en-in/shop/laptops/xps-13",
  },
  {
    id: 103,
    name: "HP Spectre x360",
    price: 119999,
    image: "/images/-original-imagx4ffdhvcpvep.webp",
    url: "https://www.hp.com/in-en/shop/hp-spectre-x360",
  },
];

const Laptops = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="category-container">
      <h1>Laptops</h1>
      <div className="category-grid">
        {laptopsData.map((item) => (
          <div className="category-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price.toLocaleString()}</p>
            <button onClick={() => window.open(item.url, "_blank")}>View Details</button>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptops;
