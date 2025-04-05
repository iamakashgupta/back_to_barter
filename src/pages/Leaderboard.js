import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/leaderboard');
        setLeaderboard(res.data);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((user, index) => (
          <li key={index}>
            {user.username}: {user.claimedItems} items claimed
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
