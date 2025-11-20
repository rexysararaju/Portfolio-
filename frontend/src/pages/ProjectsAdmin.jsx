import { useEffect, useState } from "react";
import API from "../services/api";

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    github: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("");

  // Load projects
  const loadProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Failed to load projects:", err);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // Handle form change
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Add or update project
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await API.put(`/projects/${editingId}`, form);
        setStatus("✔ Project updated successfully");
      } else {
        await API.post("/projects", form);
        setStatus("✔ Project added successfully");
      }

      setForm({ title: "", description: "", github: "" });
      setEditingId(null);
      loadProjects();

      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      setStatus("❌ Action failed");
    }
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await API.delete(`/projects/${id}`);
      setStatus("✔ Project deleted");
      loadProjects();

      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      setStatus("❌ Failed to delete");
    }
  };

  // Edit
  const handleEdit = (p) => {
    setEditingId(p._id);
    setForm({
      title: p.title,
      description: p.description,
      github: p.github || p.githubLink || "",
    });
  };

  return (
    <div className="page-container" style={styles.container}>
      <h1 style={styles.title}>Manage Projects</h1>

      {status && <p style={styles.status}>{status}</p>}

      {/* FORM */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="title"
          placeholder="Project Title"
          required
          value={form.title}
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="description"
          placeholder="Project Description"
          rows="3"
          required
          value={form.description}
          onChange={handleChange}
          style={styles.textarea}
        />

        <input
          name="githubLink"
          placeholder="GitHub Link"
          required
          value={form.githubLink}
          onChange={handleChange}
          style={styles.input}
        />

        <button style={styles.btnPrimary}>
          {editingId ? "Update Project" : "Add Project"}
        </button>
      </form>

      <h2 style={styles.subtitle}>Project List</h2>

      {/* PROJECT LIST */}
      <div>
        {projects.length === 0 ? (
          <p style={styles.empty}>No projects found.</p>
        ) : (
          projects.map((p) => (
            <div key={p._id} style={styles.card}>
              <h3 style={styles.cardTitle}>{p.title}</h3>
              <p style={styles.cardText}>{p.description}</p>

              <p style={{ marginTop: "8px" }}>
                <strong>GitHub: </strong>
                <a
                  href={p.github || p.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.link}
                >
                  {p.github || p.githubLink}
                </a>
              </p>

              <div style={styles.cardActions}>
                <button onClick={() => handleEdit(p)} style={styles.btnEdit}>
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  style={styles.btnDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// ---------------- STYLES ----------------

const styles = {
  container: {
    maxWidth: "900px",
    margin: "90px auto",
    padding: "20px",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "32px",
    color: "#2d6a4f",
  },

  subtitle: {
    marginTop: "30px",
    marginBottom: "15px",
    fontSize: "24px",
    color: "#1b4332",
  },

  status: {
    color: "#2d6a4f",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "15px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },

  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },

  btnPrimary: {
    padding: "12px",
    background: "#2d6a4f",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  },

  cardTitle: {
    fontSize: "20px",
    color: "#2d6a4f",
  },

  cardText: {
    marginTop: "8px",
    fontSize: "15px",
  },

  cardActions: {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
  },

  btnEdit: {
    padding: "8px 14px",
    background: "#ffb703",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  btnDelete: {
    padding: "8px 14px",
    background: "#d00000",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  link: {
    color: "#1d3557",
    textDecoration: "underline",
  },

  empty: {
    textAlign: "center",
    color: "#666",
    fontSize: "18px",
  },
};

export default ProjectsAdmin;
