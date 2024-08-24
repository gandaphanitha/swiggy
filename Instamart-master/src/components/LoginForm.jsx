// src/components/LoginForm.jsx
import React, { useState } from 'react';
import "../assets/css/components/LoginForm.css";

const LoginForm = ({ onLoginSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (phoneNumber.trim() === "" || password.trim() === "") {
      setError("Please enter both phone number and password.");
      return;
    }

    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
    
    const user = storedUserInfo.find(user => user.phoneNumber === phoneNumber && user.password === password);

    if (user) {
      localStorage.setItem("userPhoneNumber", phoneNumber); // Set logged-in user phone number
      setPhoneNumber("");
      setPassword("");
      setError("");
      onLoginSuccess(); // Callback to handle successful login
    } else {
      setError("Invalid phone number or password.");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
