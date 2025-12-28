import express from "express";
import cors from "cors";
import router from "./routes/blogRoutes.js";

const app = express();
app.use(cors());


app.use(express.json());

// Prefix de rutes
app.use('/api/blog', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor en marxa a http://localhost:${PORT}`);
});
