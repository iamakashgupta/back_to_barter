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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit to backend
    alert("Item donated (functionality not yet connected)");
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
