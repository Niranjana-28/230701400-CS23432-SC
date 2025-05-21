import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Import cart context
import "./ProductList.css";

const ProductList = () => {
  const { addToCart } = useCart();
  const [cartMessage, setCartMessage] = useState({});

  const products = [
    { 
      id: 1, 
      name: "Wireless Earbuds", 
      price: 49.99, 
      image: "https://images.unsplash.com/photo-1590658268034-654a30f4e7c0?q=80&w=600" 
    },
    { 
      id: 2, 
      name: "Gaming Mouse", 
      price: 39.99, 
      image: "https://images.unsplash.com/photo-1620192428893-304621cac221?q=80&w=600" // ✅ direct image URL
    },
    { 
      id: 3, 
      name: "Laptop Stand", 
      price: 29.99, 
      image: "https://images.unsplash.com/photo-1611077436501-e5b16c1e23b3?q=80&w=600" 
    },
    { 
      id: 4, 
      name: "Mechanical Keyboard", 
      price: 69.99, 
      image: "https://images.unsplash.com/photo-1596558450262-9e6fbc4fdd75?q=80&w=600" 
    },
    { 
      id: 5, 
      name: "Smartwatch", 
      price: 99.99, 
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600" 
    },
    { 
      id: 6, 
      name: "Portable Charger", 
      price: 25.99, 
      image: "https://images.unsplash.com/photo-1602274180771-4904d6cb5c36?q=80&w=600" 
    },
    { 
      id: 7, 
      name: "Bluetooth Speaker", 
      price: 59.99, 
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=600" 
    },
    { 
      id: 8, 
      name: "Wireless Router", 
      price: 79.99, 
      image: "https://images.unsplash.com/photo-1589149098258-3c23e4bca8d3?q=80&w=600" 
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartMessage({ ...cartMessage, [product.id]: true });
    setTimeout(() => {
      setCartMessage((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            {cartMessage[product.id] && (
              <p className="cart-message">Added to cart successfully!</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
