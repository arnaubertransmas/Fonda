import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const collection = db.collection("blogs");

const getAll = async () => {
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  return await collection.findOne({ _id: new ObjectId(id) });
};

const addItem = async (item) => {
  const result = await collection.insertOne(item);
  return { ...item, _id: result.insertedId };
};

const updateItem = async (id, updatedData) => {
  const result = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updatedData },
    { returnDocument: "after" }
  );

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
