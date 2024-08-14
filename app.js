const express = require("express");

const app = express();
const port = 3000;

// View engine setup: Handlebars
app.set("view engine", "hbs");

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from 'public' directory
app.use(express.static("public"));

// Import routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// Use routes
app.use("/", indexRouter);
app.use("/htmlconvert", usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
