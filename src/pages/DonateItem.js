import React, { useState } from "react";

const DonateItem = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    weight: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Item donated successfully!");
        setFormData({ title: "", description: "", weight: "", image: "" });
      } else {
        alert("Something went wrong: " + data.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to donate item. Check console.");
    }
  };
  

  return (
    <div style={styles.container}>
      <h2>Donate an Item ♻️</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
        />

        <label>Weightage (1-10)</label>
        <input
          name="weight"
          type="number"
          min="1"
          max="10"
          value={formData.weight}
          onChange={handleChange}
          required
        />

        <label>Image URL</label>
        <input
          name="image"
          type="text"
          value={formData.image}
          onChange={handleChange}
        />

        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  }
};

export default DonateItem;
