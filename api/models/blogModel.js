import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const collection = db.collection("blogs");

const getAll = async () => {
  const items = await collection.find({}).toArray();
  
  return items.map(item => ({
    ...item,
    _id: item._id.toString(), // Convertir ObjectId a string
  }));
};

const getById = async (id) => {
  const item = await collection.findOne({ _id: new ObjectId(id) });
  
  if (item) {
    return {
      ...item,
      _id: item._id.toString(),
    };
  }
  
  return null;
};

const addItem = async (item) => {
  const result = await collection.insertOne(item);
  return { 
    ...item, 
    _id: result.insertedId.toString() // ⬅️ Convertir a string
  };
};

const updateItem = async (id, updatedData) => {
  const result = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updatedData },
    { returnDocument: "after" }
  );

  if (result.value) {
    return {
      ...result.value,
      _id: result.value._id.toString(), // ⬅️ Convertir a string
    };
  }

  return result.value;
};

const deleteItem = async (id) => {
  const result = await collection.deleteOne({
    _id: new ObjectId(id)
  });

  return result.deletedCount === 1;
};

export {
  getAll,
  getById,
  addItem,
  updateItem,
  deleteItem
};