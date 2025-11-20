import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// match EXACT file names from your screenshot
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import ContactPage from "./pages/ContactPage";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import AdminRoute from "./components/AdminRoute";

// Admin pages
import EducationAdmin from "./pages/EducationAdmin";
import ProjectsAdmin from "./pages/ProjectsAdmin";

function App() {
  return (
    <AuthProvider>
      <Router>

        <Navbar />   {/* SHOW ON ALL PAGES */}

        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Admin Pages */}
          <Route
            path="/admin/education"
            element={
              <AdminRoute>
                <EducationAdmin />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/projects"
            element={
              <AdminRoute>
                <ProjectsAdmin />
              </AdminRoute>
            }
          />
        </Routes>

      </Router>
    </AuthProvider>
  );
}

export default App;
