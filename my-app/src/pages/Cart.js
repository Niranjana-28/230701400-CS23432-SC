import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  
  // State to track order placement
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    // Simulate order placement
    setOrderPlaced(true);
    setTimeout(() => {
      alert("Order Placed Successfully!");
      // Optionally, clear the cart after successful checkout
      // clearCart();
    }, 1000); // Simulating a 1-second delay for order placement
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} width={100} />
                <div>
                  <p>{item.name}</p>
                  <p>₹{item.price.toLocaleString()}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ₹{total.toLocaleString()}</p>
          {/* Checkout Button */}
          <button className="checkout-btn" onClick={handleCheckout} disabled={orderPlaced}>
            {orderPlaced ? "Order Placed" : "Proceed to Checkout"}
          </button>
        </>
      )}
      {/* Show success message if order is placed */}
      {orderPlaced && (
        <div className="order-success-msg">
          <p>Order Placed Successfully! 🎉</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
