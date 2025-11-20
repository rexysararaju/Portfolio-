import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} from "../controllers/projectController.js";

import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// PUBLIC ROUTES
router.get("/", getProjects);
router.get("/:id", getProjectById);

// ADMIN ROUTES
router.post("/", protect, adminOnly, createProject);
router.put("/:id", protect, adminOnly, updateProject);
router.delete("/:id", protect, adminOnly, deleteProject);

export default router;
