import { useEffect, useState } from "react";
import API from "../services/api";

const EducationPage = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      const res = await API.get("/education");
      setEducation(res.data);
    };

    fetchEducation();
  }, []);

  return (
    <div className="page-container">
      <h1>My Education</h1>

      <div className="edu-grid">
        {education.length === 0 && <p>No education records found.</p>}

        {education.map((item) => (
          <div className="card" key={item._id}>
            <h3>{item.degree}</h3>
            <p><strong>{item.school}</strong></p>
            <p>{item.startYear} - {item.endYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
