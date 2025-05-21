import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Chatbot from "./Chatbot";


const Home = () => {
  const navigate = useNavigate();

  // Ad Slider Images
  const ads = [
    "/images/0292f25145c6bb40.webp",
    "/images/17307226556789caf869860754f22b7bd378c72afdb4e.webp",
    "/images/1735805619423f28f8088c72640c7be182bfa0e20a984.webp",
  ];

  const categories = [
    {
      id: 1,
      name: "Mobiles",
      image: "/images/paolo-giubilato-ZwKCWVFdrcs-unsplash.jpg",
      route: "/mobiles",
    },
    {
      id: 2,
      name: "Laptops",
      image: "/images/howard-bouchevereau-S2r2Ex8jv2o-unsplash.jpg",
      route: "/laptops",
    },
    {
      id: 3,
      name: "Fashion",
      image: "/images/dom-hill-nimElTcTNyY-unsplash.jpg",
      route: "/fashion",
    },
    {
      id: 4,
      name: "Home Appliances",
      image: "/images/seiji-seiji-Ihh0nT34AJs-unsplash.jpg",
      route: "/home-appliances",
    },
    {
      id: 5,
      name: "Grocery",
      image: "/images/no-revisions-ixS7UCRJTdM-unsplash.jpg",
      route: "/grocery",
    },
  ];

  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-20T00:00:00");
    const currentDate = new Date();
    const timeLeft = eventDate - currentDate;

    if (timeLeft <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      <div className="slider-container">
        <Slider {...settings}>
          {ads.map((ad, index) => (
            <div key={index}>
              <img src={ad} alt={`Ad ${index + 1}`} className="ad-image" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="offer-timer-container">
        <h2 className="offer-title">Limited Time Offer!</h2>
        <div className="timer">
          <p>{`Hurry Up! Offer ends in: ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
        </div>
      </div>

      <h2 className="category-title">Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => navigate(category.route)}
          >
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-info">
              <p>{category.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="featured-products">
        <h2 className="category-title">Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/product1.jpg" alt="Featured Product 1" />
            <p>Product Name</p>
            <p className="product-price">₹9999</p>
          </div>
          <div className="product-card">
            <img src="/images/product2.jpg" alt="Featured Product 2" />
            <p>Product Name</p>
            <p className="product-price">₹14999</p>
          </div>
          <div className="product-card">
            <img src="/images/product3.jpg" alt="Featured Product 3" />
            <p>Product Name</p>
            <p className="product-price">₹19999</p>
          </div>
        </div>
      </div>
<Chatbot />

    </div>
  );
};

export default Home;
