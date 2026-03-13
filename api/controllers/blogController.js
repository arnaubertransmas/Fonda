import {
  getAll,
  getById,
  getCategories,
  addItem,
  deleteItem
} from "../models/blogModel.js";

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

const getAllCategories = async(req, res) => {
  try {
    const categories = await getCategories()
    return res.json(categories)
    
  } catch (error) {
    res.status(500).json({'error': "Failded to retrieve categories"})
  }
}

const addEntry = async (req, res) => {
  try {

    const VALID_CATEGORIES = ['senderisme', 'btt', 'ciclisme', 'running', 'altres'];
    const imagePaths = req.files ? req.files.map(file => file.path) : [];
    
    if (!VALID_CATEGORIES.includes(req.body.category)) {
      return res.status(400).json({ error: 'Categoria no vàlida' });
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
    // console.log(addedItem)
    
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
    console.error(error);
    res.status(500).json({ 
      error: "Failed to delete blog",
      message: error.message 
    });
  }
}

export {
  getBlogs,
  getBlog,
  getAllCategories,
  addEntry,
  deleteBlog
};