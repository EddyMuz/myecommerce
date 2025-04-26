import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage";
import SignUpBuyer from "./components/SignUpBuyer";
import SignUpSeller from "./components/SignUpSeller";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup/buyer" element={<SignUpBuyer />} />
        <Route path="/signup/seller" element={<SignUpSeller />} />
      </Routes>
    </Router>
  );
}

export default App;
