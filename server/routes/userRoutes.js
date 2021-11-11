import express from "express";
import paginatedResults from "../middleware/paginatedUsers.js";
import {
  getUsers,
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/userControllers.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/users", paginatedResults(User), getUsers);
router.get("/user/:id", getUser);
router.post("/user/add", addUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);

export default router;
