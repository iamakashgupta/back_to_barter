// frontend/src/pages/Leaderboard.js
import React, { useEffect, useState } from "react";
import API from "../api";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  const fetchLeaderboard = async () => {
    try {
      const res = await API.get("/leaderboard");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch leaderboard", err);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div style={styles.container}>
      <h2>🏆 Top Donators</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Items Donated</th>
            <th>BarterCoins</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u._id}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.donatedItems}</td>
              <td>{u.barterCoins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: { padding: "20px" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: { backgroundColor: "#ddd" }
};

export default Leaderboard;
