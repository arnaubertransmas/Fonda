import {
  getAll,
  getById,
  getCategories,
  addItem,
  deleteItem
} from "../models/blogModel.js";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getBlogs = async (req, res) => {
  try {
    const items = await getAll();
    return res.json(items);
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

const getAllCategories = async (req, res) => {
  try {
    const categories = await getCategories();
    return res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve categories" });
  }
};

const addEntry = async (req, res) => {
  try {
    const VALID_CATEGORIES = ['senderisme', 'btt', 'ciclisme', 'running', 'altres'];

    if (!VALID_CATEGORIES.includes(req.body.category)) {
      return res.status(400).json({ error: 'Categoria no vàlida' });
    }

    const imagePaths = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            { folder: 'fonda' },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          ).end(file.buffer);
        });
        imagePaths.push(result.secure_url);
      }
    }

    const blogData = {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      url: req.body.url,
      images: imagePaths,
      createdAt: new Date()
    };

    const addedItem = await addItem(blogData);
    res.status(201).json(addedItem);

  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({
      error: "Failed to add item",
      message: error.message
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteItem(id);
    if (deleted) {
      res.status(200).json({ message: "Blog eliminat correctament", success: true });
    } else {
      res.status(404).json({ error: "Blog no trobat" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete blog",
      message: error.message
    });
  }
};

export {
  getBlogs,
  getBlog,
  getAllCategories,
  addEntry,
  deleteBlog
};