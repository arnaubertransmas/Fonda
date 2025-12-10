const express = require("express");
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());


// Importar rutes
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
