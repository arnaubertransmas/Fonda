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
    console.log(id, "id")
    const item = await getById(id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve item" });
  }
};

// controllers/blogController.js
const addEntry = async (req, res) => {
  try {
    console.log('📦 Body rebut:', req.body);
    console.log('📸 Files rebuts:', req.files);
    
    // Obtenir les rutes dels fitxers pujats
    const imagePaths = req.files ? req.files.map(file => file.path) : [];
    
    console.log('🖼️ Image paths:', imagePaths);
    
    const blogData = {
      name: req.body.name,
      description: req.body.description,
      url: req.body.url,
      images: imagePaths,
      createdAt: new Date()
    };
    
    console.log('💾 Data a guardar:', blogData);
    
    const addedItem = await addItem(blogData);
    
    console.log('✅ Item afegit:', addedItem);
    
    res.status(201).json(addedItem);
  } catch (error) {
    console.error('❌ Error complet:', error);
    console.error('Stack:', error.stack);
    res.status(500).json({ 
      error: "Failed to add item",
      message: error.message 
    });
  }
};

export {
  getBlogs,
  getBlog,
  addEntry
};