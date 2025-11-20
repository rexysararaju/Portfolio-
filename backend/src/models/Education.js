import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    school: {
      type: String,
      required: true,
    },

    degree: {
      type: String,
      required: true,
    },

    startYear: {
      type: String,
      required: true,
    },

    endYear: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    }
  },
  { timestamps: true }
);

export default mongoose.model("Education", educationSchema);
