import express from "express";
import { signup, signin, signout } from "../controllers/authController.js";

const router = express.Router();

// PUBLIC ROUTES
router.post("/signup", signup);   // User signup
router.post("/signin", signin);   // User login
router.get("/signout", signout);  // User logout

export default router;
