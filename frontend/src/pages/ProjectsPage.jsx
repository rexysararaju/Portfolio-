import { useEffect, useState } from "react";
import API from "../services/api";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await API.get("/projects");
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="page-container">
      <h1>My Projects</h1>

      <div className="project-grid">
        {projects.map((p) => (
          <div className="card" key={p._id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href={p.githubLink} target="_blank">{p.githubLink}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
