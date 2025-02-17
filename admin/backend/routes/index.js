import userRoutes from "./user.route.js";
import express from "express";

const routes = express.Router();

routes.use("/api/user", userRoutes);

export default routes;