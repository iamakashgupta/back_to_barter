// frontend/src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <Link style={styles.logo} to="/">BackToBarter</Link>
      <div style={styles.menu}>
        {user ? (
          <>
            <span style={styles.username}>Hello, {user.name}</span>
            <Link to="/market">Market</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/eco">EcoMeter</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

// 🔽 Add styles HERE before export
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontWeight: "bold",
    fontSize: "22px",
    color: "#0f766e"
  },
  menu: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  username: {
    fontWeight: "600",
    color: "#0f766e"
  }
};

export default Navbar;
