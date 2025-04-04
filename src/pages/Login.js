import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", form);

      const user = res.data.user;

      // ✅ Store user info in localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("userId", user._id);       // for backend auth
      localStorage.setItem("username", user.username); // optional: for navbar

      setMsg("Login successful ✅");
      navigate("/market");
    } catch (err) {
      setMsg(err.response?.data?.message || "Login error ❌");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>{msg}</p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
  },
};

export default Login;
