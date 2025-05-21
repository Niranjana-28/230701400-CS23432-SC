import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // Tracks if the bot is typing
  const navigate = useNavigate(); // Initialize navigate function

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true); // Start typing animation

    // Simulate a delay before the bot responds
    setTimeout(() => {
      const reply = getBotReply(input.toLowerCase());
      setMessages([
        ...newMessages,
        { from: "bot", text: reply },
      ]);
      setIsTyping(false); // Stop typing animation
    }, 1500); // Bot takes 1.5 seconds to reply
  };

  const getBotReply = (msg) => {
    if (msg.includes("hello") || msg.includes("hi")) return "Hello! 👋";
    if (msg.includes("account") || msg.includes("profile")) {
      navigate("/profile");
      return "Redirecting you to your account settings...";
    }
    if (msg.includes("mobiles")) {
      navigate("/mobiles");
      return "Redirecting you to the Mobiles category...";
    }
    if (msg.includes("laptops")) {
      navigate("/laptops");
      return "Redirecting you to the Laptops category...";
    }
    if (msg.includes("fashion")) {
      navigate("/fashion");
      return "Redirecting you to the Fashion category...";
    }
    if (msg.includes("home appliances")) {
      navigate("/home-appliances");
      return "Redirecting you to the Home Appliances category...";
    }
    if (msg.includes("grocery")) {
      navigate("/grocery");
      return "Redirecting you to the Grocery category...";
    }
    if (msg.includes("offer") || msg.includes("deal")) return "We have amazing deals today! Check the home page banners.";
    if (msg.includes("help")) return "I'm here to help! Ask me about categories, offers, or orders.";
if (msg.includes("name")) return "I'm Riya, the chatbot!";
if (msg.includes("where is my order")) {
     navigate("/orders");
     return "Redirecting you to the order....";
}
    return "Sorry, I didn’t get that. Can you try asking in a different way?";
  };

  return (
    <>
      <div className="chatbot-icon" onClick={toggleChat}>
        💬
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Need Help?</span>
            <button onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-msg ${msg.from === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-msg bot">
                <div className="typing-animation">...</div>
              </div>
            )}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
