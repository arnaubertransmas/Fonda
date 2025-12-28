// controllers/blogController.js
import {
  getAll,
  getById,
  addItem
} from "../models/blogModel.js";

const getBlogs = async (req, res) => {
  try {
    const items = await getAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve items" });
  }
};

const getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await getById(id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve item" });
  }
};

const addBlog = async (req, res) => {
  try {
    const addedItem = await addItem(req.body);
    res.status(201).json(addedItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item" });
  }
};

export {
  getBlogs,
  getBlog,
  addBlog
};
