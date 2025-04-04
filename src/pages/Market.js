// frontend/src/pages/Market.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Market.css'; // optional CSS file
import { useNavigate } from 'react-router-dom';

const Market = () => {
  const [products, setProducts] = useState([]);
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

  const handleClaim = async (productId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?._id;
  
      if (!userId) {
        alert("Please login to claim items.");
        navigate("/login");
        return;
      }
  
      const res = await axios.post(`http://localhost:5000/api/items/claim/${productId}`, {
        userId
      });
  
      alert("Claimed successfully! ✅");
      fetchProducts();
    } catch (err) {
      console.error("Error claiming item:", err.response?.data || err.message);
      alert("Failed to claim item ❌");
    }
  };
  

  return (
    <div className="market-container">
      <h2>Community Market 🛍️</h2>
      <div className="product-grid">
        {products
          .filter(product => !product.claimed) // 🧽 Only show unclaimed items
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
