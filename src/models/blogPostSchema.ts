import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Blogposts", BlogPostSchema);