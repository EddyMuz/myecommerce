import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

const SignUpBuyer = () => {
  const [buyerData, setBuyerData] = useState({
    username: "",
    email: "",
    password: "",
    idNumber: "",
    contactNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setBuyerData({ ...buyerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/signup", { ...buyerData, role: "buyer" });
      alert("Buyer account created successfully!");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Failed to register. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up as Buyer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="idNumber" placeholder="ID Number" onChange={handleChange} required />
        <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUpBuyer;
