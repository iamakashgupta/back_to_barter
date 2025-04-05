import React, { useEffect, useState } from 'react';

const Ecometer = () => {
  const [ecoScore, setEcoScore] = useState(
    parseInt(localStorage.getItem('ecoScore')) || 0
  );

  useEffect(() => {
    localStorage.setItem('ecoScore', ecoScore); // sync to localStorage
  }, [ecoScore]);

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '40px auto',
      textAlign: 'center',
      fontFamily: 'Segoe UI, sans-serif',
    },
    barContainer: {
      height: '30px',
      width: '100%',
      backgroundColor: '#eee',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)',
    },
    barFill: {
      height: '100%',
      width: `${ecoScore}%`,
      backgroundColor: ecoScore >= 80 ? '#4caf50' : ecoScore >= 50 ? '#ffc107' : '#f44336',
      transition: 'width 0.3s ease',
    },
    label: {
      marginTop: '10px',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h2>🌱 Ecometer</h2>
      <div style={styles.barContainer}>
        <div style={styles.barFill}></div>
      </div>
      <div style={styles.label}>{ecoScore} / 100</div>
    </div>
  );
};

export default Ecometer;
