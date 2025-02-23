const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.get("/testing-server", (req, res) => {
  res.send().status(200).json({
    success: true,
    message: "Server is testing",
  });
});

// app starting point
app.listen(PORT, () => {
  console.log(`APP IS RUNNING at http://localhost:${PORT}`);
});
