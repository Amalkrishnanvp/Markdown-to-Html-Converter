const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Markdown - Html",
    heading: "Markdown to HTML Converter",
  });
});

module.exports = router;
