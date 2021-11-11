import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/database.js";
import { generate } from "./generateData.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const port = 5000 || process.env.PORT;

app.use("/api", userRoutes);

connectDB();
generate();
app.listen(port, () => console.log(`running on port : ${port}`));
