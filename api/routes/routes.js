import express from "express";
import {
  getBlogs,
  getBlog,
  addEntry,
  deleteBlog,
  getAllCategories
} from "../controllers/blogController.js";
import { validateUser } from "../controllers/userController.js";
import { authenticateToken } from '../config/authMiddleware.js';
import upload from "../config/multerConfig.js"

const router = express.Router();

router.get("/blog/getBlogs", getBlogs);
router.get("/blog/getBlog/:id", getBlog);
router.get("/blog/getAllCategories", getAllCategories)
router.post("/validateUser", validateUser);

router.post("/blog/addEntry", upload.array('images', 5), authenticateToken, addEntry);
router.delete("/blog/deleteBlog/:id", authenticateToken, deleteBlog);

export default router;
