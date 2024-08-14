const express = require("express");
const router = express.Router();

/* POST html convertion */
router.post("/", (req, res, next) => {
  res.send("Markdown to HTML conversion");
});

module.exports = router;
