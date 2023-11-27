import express from "express";

import {
  getPosts,
  deletePostById,
  createPost,
  updatePostById,
} from "../controllers/posts.ts";

const router = express.Router();

router.get("/api/posts", getPosts);

router.post("/api/posts/add", createPost);

router.patch("/api/posts/:id", updatePostById);

router.delete("/api/posts/:id", deletePostById);

export default router;
