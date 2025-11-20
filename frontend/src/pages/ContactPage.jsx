import { useState } from "react";
import API from "../services/api";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/contact", form);
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="page-container" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contact Me</h1>

      {status && <p className="status-msg">{status}</p>}

      {/* Contact Info */}
      <div className="info-box">
        <h3 style={{ marginBottom: "10px" }}>Contact Information</h3>
        <p><strong>Email:</strong> sararajurexy@gmail.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://linkedin.com/in/sararajurexy" target="_blank">
            linkedin.com/in/sararajurexy
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/rexysararaju" target="_blank">
            github.com/rexysararaju
          </a>
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Write your message..."
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button className="btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
