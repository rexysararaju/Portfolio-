import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

const SigninPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/signin", form);

      login(res.data.user, res.data.token);

      navigate("/");
    } catch {
      setError("Invalid login credentials.");
    }
  };

  return (
    <div className="page-container" style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h1>Sign In</h1>

      {error && <p className="status-msg" style={{ color: "red" }}>{error}</p>}

      <form
        className="auth-form"
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        <button className="btn-primary">Login</button>
      </form>

      <p style={{ marginTop: "15px" }}>
        No account?{" "}
        <span style={{ color: "#e27c3e", cursor: "pointer" }} onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default SigninPage;
