import db from "../db/conn.js";
import bcrypt from "bcrypt";

const collection = db.collection("users");

const getUser = async (email, password) => {

    const user = await collection.findOne({ email: email});
    console.log(email, password, user, user.password)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid)
    if (!isPasswordValid) {
        return null
    }

    return user
};

export {
  getUser
};