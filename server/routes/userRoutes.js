import express from "express";
import paginatedResults from "../middleware/paginatedUsers.js";
import { getUsers } from "../controllers/userControllers.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/users", paginatedResults(User), getUsers);

export default router;
