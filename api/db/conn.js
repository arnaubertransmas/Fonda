import { MongoClient } from "mongodb";


const connectionString = "mongodb://localhost:27017";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("Connected! ")
} catch(e) {
  console.error(e);
}

let db = conn.db("Fonda");
export default db;