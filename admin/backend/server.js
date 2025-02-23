import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index.js";
import connectDB from "./utils/db.js";

// config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.json({ limit: "10mb" })); // Adjust limit as needed
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
// mongoose connection
connectDB();
// routes
app.get("/testing-server", (req, res) => {
  res.send().status(200).json({
    success: true,
    message: "Server is testing",
  });
});
app.use(routes);

// app starting point
app.listen(PORT, () => {
  console.log(`APP IS RUNNING at http://localhost:${PORT}`);
});
