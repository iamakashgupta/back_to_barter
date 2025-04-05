// frontend/src/pages/Market.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Market.css'; // optional CSS file
import { useNavigate } from 'react-router-dom';

const Market = () => {
  const [products, setProducts] = useState([]);
  const [claimedIds, setClaimedIds] = useState([]);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClaim = (productId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login to claim items.");
      navigate("/login");
      return;
    }
  
    // Hide item visually
    setClaimedIds(prev => [...prev, productId]);
  
    // 🌿 Update ecoScore in localStorage
    const currentScore = parseInt(localStorage.getItem('ecoScore')) || 0;
    const newScore = Math.min(currentScore + 10, 100); // ⬆️ add 10 points
    localStorage.setItem('ecoScore', newScore);
  
    alert("Claimed & Ecometer boosted ✅");
  };
  

  return (
    <div className="market-container">
      <h2>Community Market 🛍️</h2>
      <div className="product-grid">
  {products
    .filter(product => !product.claimed && !claimedIds.includes(product._id)) // ✅ updated
    .map(product => (
      <div key={product._id} className="product-card">
        <img src={product.image || "https://via.placeholder.com/150"} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p><strong>Weight:</strong> {product.weight}</p>
        {!product.claimedBy ? (
          <button onClick={() => handleClaim(product._id)}>Claim</button>
        ) : (
          <button disabled>Already Claimed</button>
        )}
      </div>
    ))}
</div>
    </div>
  );
};

export default Market;
