import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/leaderboard');
        setUsers(response.data);
      } catch (error) {
        console.error('Leaderboard load failed:', error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="leaderboard-container">
      <h3>Eco Leaders</h3>
      <div className="leaderboard-list">
        {users.map((user, index) => (
          <div key={user._id} className="leaderboard-item">
            <span className="rank">#{index + 1}</span>
            <span className="username">{user.username}</span>
            <span className="points">{user.ecoPoints} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;