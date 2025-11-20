import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    skills: {
      type: [String],   // array: ["React", "Node", "MongoDB"]
      default: [],
    },

    githubLink: {
      type: String,
      default: "",
    },

    liveLink: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "", // You can store URL or base64
    }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
