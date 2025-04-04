// frontend/src/pages/EcoMeter.js
import React, { useEffect, useState } from "react";
import API from "../api";

const EcoMeter = () => {
  const [stats, setStats] = useState({ totalUsers: 0, totalDonatedItems: 0, estimatedCarbonSavedKg: 0 });

  const fetchStats = async () => {
    try {
      const res = await API.get("/leaderboard/eco-stats");
      setStats(res.data);
    } catch (err) {
      console.error("Failed to fetch eco stats", err);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌱 EcoMeter</h2>
      <p><strong>Total Users:</strong> {stats.totalUsers}</p>
      <p><strong>Total Donated Items:</strong> {stats.totalDonatedItems}</p>
      <p><strong>Estimated CO₂ Saved:</strong> {stats.estimatedCarbonSavedKg} kg</p>
    </div>
  );
};

export default EcoMeter;
