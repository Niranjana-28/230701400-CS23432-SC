import React, { useState, useEffect } from "react";
import { FaUserEdit, FaCreditCard, FaHistory, FaMoneyCheckAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const getStoredUser = () => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : {
      name: "Guest",
      email: "guest@example.com",
      phone: "N/A",
      avatar: "https://via.placeholder.com/100"
    };
  };

  const [user, setUser] = useState(getStoredUser());
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(user);
  const [upiList, setUpiList] = useState(["john.doe@upi", "doe123@ybl"]);
  const [newUpi, setNewUpi] = useState("");
  const [cards, setCards] = useState(["**** **** **** 1234", "**** **** **** 5678"]);
  const [newCard, setNewCard] = useState("");
  const [orders, setOrders] = useState([
    { id: "1001", total: 2499, status: "Delivered", items: ["T-shirt", "Shoes"] },
    { id: "1002", total: 1299, status: "In Transit", items: ["Bluetooth Earbuds"] },
    { id: "1003", total: 999, status: "Cancelled", items: ["Mouse", "Keyboard"] },
  ]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(editData);
    localStorage.setItem("user", JSON.stringify(editData)); // Save updated user
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (window.confirm("Discard changes?")) {
      setIsEditing(false);
      setEditData(user);
    }
  };

  const addUpi = () => {
    if (newUpi.trim()) {
      setUpiList([...upiList, newUpi]);
      setNewUpi("");
    }
  };

  const removeUpi = (upi) => {
    setUpiList(upiList.filter((u) => u !== upi));
  };

  const addCard = () => {
    if (newCard.trim() && newCard.length === 4) {
      setCards([...cards, `**** **** **** ${newCard}`]);
      setNewCard("");
    } else {
      alert("Enter last 4 digits of card.");
    }
  };

  const removeCard = (card) => {
    setCards(cards.filter((c) => c !== card));
  };

  const viewAllOrders = () => {
    navigate("/orders");
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-card">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="profile-avatar"
          onError={(e) => (e.target.src = "https://via.placeholder.com/100")}
        />
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          <FaUserEdit className="edit-icon" /> Edit Profile
        </button>
      </div>

      <div className="profile-section">
        <h3><FaMoneyCheckAlt /> UPI Accounts</h3>
        <ul>
          {upiList.map((upi, index) => (
            <li key={index}>
              {upi}
              <button onClick={() => removeUpi(upi)} style={{ marginLeft: "10px", color: "red" }}>✕</button>
            </li>
          ))}
        </ul>
        <input type="text" value={newUpi} placeholder="Add new UPI ID" onChange={(e) => setNewUpi(e.target.value)} />
        <button className="section-btn" onClick={addUpi}>Add UPI</button>
      </div>

      <div className="profile-section">
        <h3><FaCreditCard /> Saved Cards</h3>
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              {card}
              <button onClick={() => removeCard(card)} style={{ marginLeft: "10px", color: "red" }}>✕</button>
            </li>
          ))}
        </ul>
        <input type="text" value={newCard} placeholder="Enter last 4 digits" onChange={(e) => setNewCard(e.target.value)} maxLength="4" />
        <button className="section-btn" onClick={addCard}>Add Card</button>
      </div>

      <div className="profile-section">
        <h3><FaHistory /> Order History</h3>
        <ul>
          {orders.map((order) => (
            <li key={order.id} onClick={() => setSelectedOrder(order)} style={{ cursor: "pointer" }}>
              Order #{order.id} - ₹{order.total} - {order.status}
            </li>
          ))}
        </ul>
        <button className="section-btn" onClick={viewAllOrders}>View All Orders</button>
      </div>

      {isEditing && (
        <div className="edit-modal">
          <div className="modal-content">
            <h3>Edit Profile</h3>
            <input type="text" name="name" value={editData.name} onChange={handleEditChange} placeholder="Name" />
            <input type="email" name="email" value={editData.email} onChange={handleEditChange} placeholder="Email" />
            <input type="text" name="phone" value={editData.phone} onChange={handleEditChange} placeholder="Phone" />
            <div className="modal-actions">
              <button className="save-btn" onClick={handleSave}>Save</button>
              <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {selectedOrder && (
        <div className="edit-modal" onClick={() => setSelectedOrder(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Order #{selectedOrder.id} Details</h3>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <p><strong>Total:</strong> ₹{selectedOrder.total}</p>
            <ul>
              {selectedOrder.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setSelectedOrder(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
