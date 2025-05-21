import React from "react";
import { useCart } from "../context/CartContext";
import "./Mobiles.css";

const mobilesData = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 129900,
    image: "/images/images1.jpeg",
    url: "https://www.gsmarena.com/apple_iphone_14_pro-11860.php",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 74999,
    image: "/images/images.jpeg",
    url: "https://www.gsmarena.com/samsung_galaxy_s23-12082.php",
  },
  {
    id: 3,
    name: "OnePlus 12R",
    price: 45999,
    image: "/images/images1.jpeg",
    url: "https://www.gsmarena.com/oneplus_12r-12621.php",
  },
];

const Mobiles = () => {
  const { addToCart } = useCart();

  const handleView = (url) => {
    window.open(url, "_blank");
  };

  const handleAddToCart = (mobile) => {
    addToCart(mobile);
    alert(`${mobile.name} added to cart!`);
  };

  return (
    <div className="mobiles-container">
      <h1>Mobiles</h1>
      <div className="mobiles-grid">
        {mobilesData.map((mobile) => (
          <div className="mobile-card" key={mobile.id}>
            <div className="mobile-img-container">
              <img src={mobile.image} alt={mobile.name} className="mobile-img" />
            </div>
            <h3>{mobile.name}</h3>
            <p className="price">₹{mobile.price.toLocaleString()}</p>
            <div className="mobile-actions">
              <button className="view-details" onClick={() => handleView(mobile.url)}>
                View Details
              </button>
              <button className="add-to-cart" onClick={() => handleAddToCart(mobile)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
