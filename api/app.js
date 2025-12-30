// app.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import router from "./routes/blogRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Servir fitxers estàtics de la carpeta uploads (per accedir a les imatges)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Prefix de rutes
app.use('/api/blog', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor en marxa a http://localhost:${PORT}`);
});