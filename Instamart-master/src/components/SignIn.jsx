


import React, { useState } from "react";
import "../assets/css/components/Navbar.css";

const SignIn = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (phoneNumber.trim() === "") {
      alert("Please enter your phone number.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.phoneNumber === phoneNumber);
    
    if (user) {
      console.log("Logging in with phone number:", phoneNumber);
      localStorage.setItem("userPhoneNumber", phoneNumber);
      setPhoneNumber("");
      // Redirect to home page (Assuming you have a home page route setup)
      window.location.href = "/home";
    } else {
      alert("You don't have an account. Please create a new account.");
    }
  };

  const handleRegister = () => {
    if (phoneNumber.trim() === "" || name.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Please fill in all the fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.phoneNumber === phoneNumber);

    if (userExists) {
      alert("This phone number is already registered.");
      return;
    }

    const userInfo = { name, phoneNumber, email, password };
    console.log("Registering with:", userInfo);
    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));
    setName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    alert("You have registered successfully!");
    onClose();
  };

  return (
    <div className="form-container">
      {isRegister ? (
        <div className="register-form">
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
          <p onClick={() => setIsRegister(false)}>Already have an account? Sign In</p>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p onClick={() => setIsRegister(true)}>Create an account</p>
        </div>
      )}
    </div>
  );
};

export default SignIn;

