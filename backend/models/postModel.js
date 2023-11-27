import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  body: String,
  tags: [String],
  title: String,
});

export default mongoose.model("post", postSchema);
