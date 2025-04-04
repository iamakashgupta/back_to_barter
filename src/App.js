// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DonateItem from "./pages/DonateItem";
import Market from "./pages/Market";
import Leaderboard from "./pages/Leaderboard";
import EcoMeter from "./pages/EcoMeter";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<DonateItem />} />
        <Route path="/market" element={<Market />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/eco" element={<EcoMeter />} />
      </Routes>
    </Router>
  );
}

export default App;
