import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // Sample order data (You can replace it with an API call to fetch real orders)
  useEffect(() => {
    const sampleOrders = [
      {
        orderId: "ORD123",
        productName: "Mobile Phone",
        quantity: 1,
        price: 30000,
        status: "Shipped",
        date: "2025-04-10",
      },
      {
        orderId: "ORD124",
        productName: "Laptop",
        quantity: 1,
        price: 50000,
        status: "Delivered",
        date: "2025-04-05",
      },
      {
        orderId: "ORD125",
        productName: "Smart Watch",
        quantity: 2,
        price: 10000,
        status: "Pending",
        date: "2025-04-12",
      },
    ];
    setOrders(sampleOrders);
  }, []);

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>₹{order.price}</td>
              <td>{order.status}</td>
              <td>{order.date}</td>
              <td>
                <button
                  className="details-button"
                  onClick={() => navigate(`/order-details/${order.orderId}`)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
