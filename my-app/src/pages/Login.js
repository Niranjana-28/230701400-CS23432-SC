import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setLoading(true); // Show loading state

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        alert("🎉 Login Successful! Redirecting...");
        localStorage.setItem("token", data.token); // Store JWT token
        navigate("/profile"); // Redirect to profile page
      } else {
        // If the login failed
        setError(data.message); // Display error message
      }
    } catch (err) {
      setError("⚠️ Server error. Please try again later.");
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="login-container enhanced">
      <div className="login-card">
        <h2>🛍️ Welcome Back to ShopEase</h2>
        <p className="subtitle">Log in to explore great deals and offers!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="e.g. user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? <span className="loader"></span> : "Login"}
          </button>

          <div className="divider">or</div>

          <button type="button" className="google-btn">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="G" />
            Continue with Google
          </button>
        </form>

        <p className="signup-link">
          New to ShopEase? <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
