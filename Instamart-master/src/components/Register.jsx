// // src/components/Register.js
// import React, { useState } from "react";

// const Register = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = () => {
//     // Handle registration logic here
//     console.log("Registering with:", { name, phoneNumber, email, password });
//     // Reset the form and state
//     setName("");
//     setPhoneNumber("");
//     setEmail("");
//     setPassword("");
//     onClose();
//   };

//   return (
//     <div className="register-form">
//       <h2>Register</h2>
//       <input
//         // type="text"
//         // placeholder="Name"
//         // value={name}
//         // onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default Register;
