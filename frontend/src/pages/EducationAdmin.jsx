import { useEffect, useState } from "react";
import API from "../services/api";

const EducationAdmin = () => {
  const [educationList, setEducationList] = useState([]);
  const [form, setForm] = useState({
    degree: "",
    school: "",
    startYear: "",
    endYear: ""
  });
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("");

  const loadEducation = async () => {
    const res = await API.get("/education");
    setEducationList(res.data);
  };

  useEffect(() => {
    loadEducation();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await API.put(`/education/${editingId}`, form);
        setStatus("Updated successfully");
      } else {
        await API.post("/education", form);
        setStatus("Education added");
      }

      setForm({ degree: "", school: "", startYear: "", endYear: "" });
      setEditingId(null);
      loadEducation();
    } catch {
      setStatus("Action failed");
    }
  };

  const handleDelete = async (id) => {
    await API.delete(`/education/${id}`);
    loadEducation();
  };

  return (
    <div className="page-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Manage Education</h1>

      {status && <p className="status-msg">{status}</p>}

      {/* Form */}
      <form
        onSubmit={handleAddOrUpdate}
        style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "25px" }}
      >
        <input name="degree" placeholder="Degree" value={form.degree} onChange={handleChange} required />
        <input name="school" placeholder="School" value={form.school} onChange={handleChange} required />
        <input name="startYear" placeholder="Start Year" value={form.startYear} onChange={handleChange} required />
        <input name="endYear" placeholder="End Year" value={form.endYear} onChange={handleChange} required />

        <button className="btn-primary">
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      {/* List */}
      <div className="list-wrapper">
        {educationList.map((item) => (
          <div className="card" key={item._id}>
            <h3>{item.degree}</h3>
            <p><strong>{item.school}</strong></p>
            <p>{item.startYear} - {item.endYear}</p>

            <div style={{ display: "flex", gap: "10px" }}>
              <button className="btn-secondary" onClick={() => {
                setForm(item);
                setEditingId(item._id);
              }}>
                Edit
              </button>

              <button className="btn-danger" onClick={() => handleDelete(item._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationAdmin;
