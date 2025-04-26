import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./homepage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <h1 className="logo">AuctionHub</h1>

        {/* Tiny Sign-Up Buttons (Top Right) */}
        <div className="top-right-options">
          <button className="signup-btn tiny" onClick={() => navigate("/signup/buyer")}>Buyer</button>
          <button className="signup-btn tiny" onClick={() => navigate("/signup/seller")}>Seller</button>
          <button className="signup-btn tiny admin" onClick={() => navigate("/admin/login")}>Admin</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Bid on exclusive items and get the best deals!</h2>
        <button className="cta-btn">Start Bidding</button>
        <button className="cta-btn">Sell Your Item</button>
      </section>

      {/* Featured Auctions */}
      <section className="featured-auctions">
        <h2>Trending Auctions</h2>
        <div className="auction-grid">
          <div className="auction-card">
            <img src="https://via.placeholder.com/200" alt="Auction Item" />
            <h3>Luxury Watch</h3>
            <p>Current Bid: $250</p>
          </div>
          <div className="auction-card">
            <img src="https://via.placeholder.com/200" alt="Auction Item" />
            <h3>Vintage Camera</h3>
            <p>Current Bid: $150</p>
          </div>
          <div className="auction-card">
            <img src="https://via.placeholder.com/200" alt="Auction Item" />
            <h3>Gaming Laptop</h3>
            <p>Current Bid: $800</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 AuctionHub | Secure Bidding Experience</p>
      </footer>
    </div>
  );
};

export default HomePage;
