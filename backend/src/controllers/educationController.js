import Education from "../models/Education.js";

// ====================== CREATE (Admin Only) ======================
export const createEducation = async (req, res) => {
  try {
    const newEducation = await Education.create(req.body);
    res.status(201).json(newEducation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ====================== GET ALL (Public) ======================
export const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ startYear: -1 });
    res.json(educations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ====================== GET ONE ======================
export const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) return res.status(404).json({ message: "Not found" });

    res.json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ====================== UPDATE (Admin Only) ======================
export const updateEducation = async (req, res) => {
  try {
    const updated = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ====================== DELETE (Admin Only) ======================
export const deleteEducation = async (req, res) => {
  try {
    const deleted = await Education.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Education deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
