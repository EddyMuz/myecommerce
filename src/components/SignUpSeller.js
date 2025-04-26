import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

const SignUpSeller = () => {
  const [sellerData, setSellerData] = useState({
    username: "",
    email: "",
    password: "",
    businessName: "",
    idNumber: "",
    contactNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setSellerData({ ...sellerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/signup", { ...sellerData, role: "seller" });
      alert("Seller account created successfully!");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Failed to register. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up as Seller</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} required />
        <input type="text" name="idNumber" placeholder="ID Number" onChange={handleChange} required />
        <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUpSeller;
