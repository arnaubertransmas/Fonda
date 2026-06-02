import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.MONGO_URI;

if (!connectionString) {
    console.error("❌ ERROR: MONGO_URI no està definida a les variables d'entorn");
    process.exit(1);
}

const client = new MongoClient(connectionString);

let db;

try {
    console.log("🔄 Connectant a MongoDB Atlas...");
    const conn = await client.connect();
    db = conn.db("FondaDB");
    console.log("✅ Connectat correctament a MongoDB Atlas!");
} catch (error) {
    console.error("❌ Error de connexió a MongoDB:", error);
    process.exit(1);
}

export default db;