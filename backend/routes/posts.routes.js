import Router from "express";
import {
  getAllPosts,
  createPosts,
  updateAPost,
  deleteAPost,
} from "../controllers/posts.controller.js";

const router = Router();

// Get all posts
router.get("/posts", getAllPosts);

// Create a post
router.post("/posts", createPosts);

// Update a post
router.put("/posts/:id", updateAPost);

// Delete a post
router.delete("/posts/:id", deleteAPost);

export default router;
