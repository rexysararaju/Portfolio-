import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const SignupPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("/auth/signup", form);
      alert("Account created! Please sign in.");
      navigate("/signin");
    } catch {
      setError("Signup failed. Try again.");
    }
  };

  return (
    <div className="page-container" style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h1>Sign Up</h1>

      {error && <p className="status-msg" style={{ color: "red" }}>{error}</p>}

      <form
        className="auth-form"
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input name="name" placeholder="Full Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" required onChange={handleChange} />

        <button className="btn-primary">Sign Up</button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Already have an account?{" "}
        <span style={{ color: "#e27c3e", cursor: "pointer" }} onClick={() => navigate("/signin")}>
          Sign In
        </span>
      </p>
    </div>
  );
};

export default SignupPage;
