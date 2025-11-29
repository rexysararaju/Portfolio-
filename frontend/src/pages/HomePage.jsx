import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="page-container" style={styles.wrapper}>
      <div style={styles.heroCard}>
        <h1 style={styles.title}>Welcome to My Portfolio</h1>
        


        <p style={styles.subtitle}>
          Hi, I'm <span style={{ fontWeight: "bold", color: "#2d6a4f" }}>Rexy</span>,
          a passionate Web Development student aspiring to become a full-stack developer.
          Explore my education, projects, skills, and feel free to reach out!
        </p>

        {/* Action Buttons */}
        <div style={styles.buttonRow}>
          <button style={styles.btn} onClick={() => navigate("/education")}>Education</button>
          <button style={styles.btn} onClick={() => navigate("/projects")}>Projects</button>
          <button style={styles.btn} onClick={() => navigate("/contact")}>Contact</button>
          <button style={styles.btn} onClick={() => navigate("/about")}>About Me</button>
        </div>

        

        {/* ADMIN CONTROLS */}
        {user?.role === "admin" && (
          <div style={styles.adminBox}>
            <h3 style={styles.adminTitle}>Admin Controls</h3>

            <button style={styles.adminBtn} onClick={() => navigate("/admin/education")}>
              Manage Education
            </button>

            <button style={styles.adminBtn} onClick={() => navigate("/admin/projects")}>
              Manage Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },

  heroCard: {
    background: "white",
    marginTop: "30px",
    padding: "50px",
    maxWidth: "900px",
    width: "100%",
    borderRadius: "18px",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  title: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#1b4332",
  },

  subtitle: {
    fontSize: "18px",
    color: "#444",
    lineHeight: "1.7",
    marginBottom: "40px",
  },

  buttonRow: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  btn: {
    background: "#2d6a4f",
    color: "white",
    padding: "12px 22px",
    borderRadius: "10px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    minWidth: "150px",
    transition: "0.3s",
  },

  authGroup: {
    marginTop: "30px",
  },

  authBtn: {
    background: "#e27c3e",
    color: "white",
    padding: "10px 18px",
    margin: "0 10px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
  },

  adminBox: {
    marginTop: "40px",
    padding: "20px",
    background: "#d8f3dc",
    borderRadius: "12px",
    border: "1px solid #95d5b2",
  },

  adminTitle: {
    color: "#1b4332",
    marginBottom: "15px",
    fontSize: "20px",
  },

  adminBtn: {
    background: "#1b4332",
    color: "white",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    margin: "8px",
    fontWeight: "600",
  },
};

export default HomePage;
