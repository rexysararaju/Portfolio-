import express from "express";
import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact
} from "../controllers/contactController.js";

import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// USER CAN CREATE CONTACT
router.post("/", createContact);

// ADMIN CAN SEE ALL CONTACTS
router.get("/", protect, adminOnly, getContacts);

// GET ONE CONTACT
router.get("/:id", protect, adminOnly, getContactById);

// UPDATE CONTACT (ADMIN ONLY)
router.put("/:id", protect, adminOnly, updateContact);

// DELETE CONTACT (ADMIN ONLY)
router.delete("/:id", protect, adminOnly, deleteContact);

export default router;
