import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/auth.js";
import educationRoutes from "./src/routes/education.js";
import projectRoutes from "./src/routes/project.js";
import contactRoutes from "./src/routes/contact.js";


dotenv.config();
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/education", educationRoutes);
app.use("/projects", projectRoutes);
app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
