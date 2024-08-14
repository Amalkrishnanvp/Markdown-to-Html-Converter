const express = require("express");
const router = express.Router();

const marked = require("marked");

/* POST html convertion */
router.post("/", (req, res, next) => {
  const markdownText = req.body.markdown;
  const htmlContent = marked.parse(markdownText);
  res.status(200).json({ html: htmlContent });
});

module.exports = router;
