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

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Segoe UI, sans-serif',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginTop: '20px',
    },
    card: {
      background: '#f7f7f7',
      borderLeft: '6px solid #444',
      padding: '15px 20px',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '1px 2px 8px rgba(0, 0, 0, 0.1)',
    },
    gold: {
      borderLeftColor: 'gold',
      background: '#fffbe6',
      fontWeight: 'bold',
    },
    silver: {
      borderLeftColor: 'silver',
      background: '#f0f0f0',
    },
    bronze: {
      borderLeftColor: '#cd7f32',
      background: '#fff4e0',
    },
    rank: {
      fontSize: '1.1em',
      fontWeight: 'bold',
      color: '#333',
    },
    username: {
      flex: 1,
      textAlign: 'left',
      paddingLeft: '10px',
      color: '#222',
    },
    score: {
      fontSize: '0.95em',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <h2>🏆 Leaderboard</h2>
      <div style={styles.list}>
        {leaderboard.map((user, index) => {
          let cardStyle = { ...styles.card };
          if (index === 0) cardStyle = { ...cardStyle, ...styles.gold };
          else if (index === 1) cardStyle = { ...cardStyle, ...styles.silver };
          else if (index === 2) cardStyle = { ...cardStyle, ...styles.bronze };

          return (
            <div key={index} style={cardStyle}>
              <span style={styles.rank}>#{index + 1}</span>
              <span style={styles.username}>{user.username}</span>
              <span style={styles.score}>{user.claimedItems} items claimed</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
