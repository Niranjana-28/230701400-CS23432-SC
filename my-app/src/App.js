import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Mobiles from "./pages/Mobiles";
import Laptops from "./pages/Laptops";
import Fashion from "./pages/Fashion";
import HomeAppliances from "./pages/HomeAppliances";
import Grocery from "./pages/Grocery";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Disputes from "./pages/Disputes";
import AdminDashboard from "./pages/AdminDashboard";
import Chatbot from "./pages/Chatbot";
import OrdersS from "./pages/Orders";


// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Home-Appliances" element={<HomeAppliances />}/>
            <Route path="/Grocery" element={<Grocery />} />
            <Route path="/orders" element={<Orders />} />


          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/disputes" element={<Disputes />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
