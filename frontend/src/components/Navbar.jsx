import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>MyPortfolio</Link>

        {/* ===== USER LINKS (ONLY if NOT admin) ===== */}
        {user?.role !== "admin" && (
          <>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/education" style={styles.link}>Education</Link>
            <Link to="/projects" style={styles.link}>Projects</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </>
        )}

        {/* ===== ADMIN LINKS ===== */}
        {user?.role === "admin" && (
          <>
            <Link to="/admin/education" style={styles.adminLink}>Manage Education</Link>
            <Link to="/admin/projects" style={styles.adminLink}>Manage Projects</Link>
            <Link to="/education" style={styles.link}>Education</Link>
            <Link to="/projects" style={styles.link}>Projects</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
            <Link to="/about" style={styles.link}>About</Link>
          </>
        )}
      </div>

      <div style={styles.right}>
        {/* NOT LOGGED IN */}
        {!user && (
          <>
            <Link to="/signin" style={styles.outlineBtn}>Sign In</Link>
            <Link to="/signup" style={styles.fillBtn}>Sign Up</Link>
          </>
        )}

        {/* LOGGED IN → SHOW LOGOUT */}
        {user && (
          <button onClick={logout} style={styles.logoutBtn}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "70px",
    width: "100%",
    background: "#2d6a4f",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    zIndex: 1000,
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },
  logo: {
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  link: {
    color: "#dff3ea",
    fontSize: "16px",
    textDecoration: "none",
    fontWeight: "500",
  },
  adminLink: {
    color: "#ffe8a1",
    fontSize: "16px",
    textDecoration: "none",
    fontWeight: "700",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  outlineBtn: {
    padding: "8px 16px",
    color: "white",
    border: "1px solid white",
    borderRadius: "8px",
    textDecoration: "none",
  },
  fillBtn: {
    padding: "8px 16px",
    background: "#e27c3e",
    color: "white",
    borderRadius: "8px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  logoutBtn: {
    padding: "8px 16px",
    background: "#c0392b",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Navbar;
