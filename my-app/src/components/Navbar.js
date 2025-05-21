import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyShop</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mobiles">Mobiles</Link></li>
          <li><Link to="/laptops">Laptops</Link></li>
          <li><Link to="/fashion">Fashion</Link></li>
          <li><Link to="/home-appliances">Home Appliances</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
