import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper function to generate token
const createToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// ====================== SIGN UP ======================
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create user
    await User.create({
      name,
      email,
      password: hashed,
      role: "user", // default user role
    });

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ====================== SIGN IN ======================
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user WITH PASSWORD
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    // 2. Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Incorrect password" });

    // 3. Create token
    const token = createToken(user);

    // 4. Return user WITHOUT password
    const { password: pw, ...userData } = user._doc;

    res.json({
      message: "Login successful",
      token,
      user: userData
    });

  } catch (err) {
    console.error("SIGNIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};


// ====================== SIGN OUT ======================
export const signout = (req, res) => {
  res.json({ message: "Signed out" });
};
