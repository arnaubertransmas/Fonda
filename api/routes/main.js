const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/welcome", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

module.exports = router;
