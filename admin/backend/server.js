const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// app starting point
app.listen(PORT, () => {
  console.log(`APP IS RUNNING at http://localhost:${PORT}`);
});
