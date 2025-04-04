import React, { useEffect, useState } from "react";

const Market = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch market items from backend (placeholder here)
    const fetchItems = async () => {
      // You'd replace this with your real backend call
      setItems([
        {
          _id: "1",
          title: "Used Books",
          description: "5 NCERTs in good condition",
          weight: 4,
          image: "https://picsum.photos/seed/book/300/200"
        },
        {
          _id: "2",
          title: "Spare Kitchen Utensils",
          description: "Used for only 2 months",
          weight: 3,
          image: "https://picsum.photos/seed/kitchen/300/200"
        }
      ]);
    };
    fetchItems();
  }, []);

  const handleClaim = (itemId) => {
    // Add logic to claim using barter coins
    alert("Claimed item! (not connected yet)");
  };

  return (
    <div style={styles.wrapper}>
      <h2>Marketplace 🛍</h2>
      <div style={styles.grid}>
        {items.map((item) => (
          <div key={item._id} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.img} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><strong>Weight:</strong> {item.weight}</p>
            <button onClick={() => handleClaim(item._id)}>Claim</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "30px",
    maxWidth: "1000px",
    margin: "0 auto"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  img: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px"
  }
};

export default Market;
