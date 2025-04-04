// frontend/src/components/ItemCard.js
import React from "react";

const ItemCard = ({ item, onClaim }) => {
  return (
    <div style={styles.card}>
      <h3>{item.name}</h3>
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Weightage:</strong> {item.weightage} BarterCoins</p>
      <p><strong>Donated By:</strong> {item.owner?.name}</p>
      {onClaim && <button onClick={() => onClaim(item._id)}>Claim</button>}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
};

export default ItemCard;
