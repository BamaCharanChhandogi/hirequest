import express from "express";
import { login, register } from "../controller/user.controller.js";

const router = express.Router();
// Register new user
router.post('/register', register);

// Login user
router.post('/login', login);

// Verify email
// router.get('/verify/:token','verify');

export default router;