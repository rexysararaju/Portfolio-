import express from "express";
import {
  createEducation,
  getEducations,
  getEducationById,
  updateEducation,
  deleteEducation
} from "../controllers/educationController.js";

import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// ====================== PUBLIC ROUTES ======================
router.get("/", getEducations);          // Anyone can view list
router.get("/:id", getEducationById);    // Anyone can view details

// ====================== ADMIN ROUTES ======================
router.post("/", protect, adminOnly, createEducation);     // Admin create
router.put("/:id", protect, adminOnly, updateEducation);   // Admin update
router.delete("/:id", protect, adminOnly, deleteEducation);// Admin delete

export default router;  // <-- REQUIRED DEFAULT EXPORT
