import React from "react";

const Home = () => {
  const styles = {
    container: {
      padding: "40px 20px",
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      background: "linear-gradient(to bottom right, #f1f8e9, #ffffff)",
      minHeight: "100vh",
      textAlign: "center",
    },
    heading: {
      fontSize: "3rem",
      color: "#2e7d32",
      marginBottom: "10px",
      fontWeight: 700,
    },
    subHeading: {
      fontSize: "1.3rem",
      color: "#666",
      marginBottom: "40px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease",
    },
    cardTitle: {
      fontSize: "1.5rem",
      color: "#388e3c",
      marginBottom: "10px",
      fontWeight: 600,
    },
    cardText: {
      fontSize: "1rem",
      color: "#444",
      lineHeight: 1.6,
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Back to Barter 🌍</h1>
      <p style={styles.subHeading}>
        Trade, Donate & Save the Planet with Barter Coins ♻️
      </p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🌿 What is Back to Barter?</h2>
          <p style={styles.cardText}>
            A sustainable platform where you can donate or claim used items using Barter Coins.
            It’s money-free, community-powered, and helps the planet!
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🪙 Barter Coins</h2>
          <p style={styles.cardText}>
            Earn coins by donating items, and use them to claim things you need. The coin value grows
            over time to promote mindful consumption.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📈 Ecometer</h2>
          <p style={styles.cardText}>
            Track your eco-impact! Claiming and donating boosts your score.
            Watch your contribution grow with every action.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🏆 Leaderboard</h2>
          <p style={styles.cardText}>
            See how you rank in the community. The more sustainable actions you take,
            the higher your score climbs. Be an eco-champion!
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📦 Donate Easily</h2>
          <p style={styles.cardText}> 
            Got something lying around? Post it in a few clicks and earn Barter Coins instantly.
            Help others while clearing space!
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🔒 Secure & Verified</h2>
          <p style={styles.cardText}>
            Every item and transaction is tracked. We make sure the platform is safe,
            fair, and respectful for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
