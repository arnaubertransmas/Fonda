import express from "express";
import {
  getBlogs,
  getBlog,
  addEntry
} from "../controllers/blogController.js";
import { validateUser } from "../controllers/userController.js";
import upload from "../config/multerConfig.js"

const router = express.Router();

router.get("/blog/getBlogs", getBlogs);
router.get("/blog/getBlog/:id", getBlog);
router.post("/blog/addEntry", upload.array('images', 5), addEntry);
router.post("/validateUser", validateUser);


export default router;
