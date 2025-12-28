import express from "express";
import {
  getBlogs,
  getBlog,
  addBlog
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/getBlogs", getBlogs);
router.get("/getBlog/:id", getBlog);
router.post("/", addBlog);

export default router;
