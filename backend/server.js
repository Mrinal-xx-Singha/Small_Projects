import express from "express";
import cors from "cors";
import router from "./routes/posts.routes.js";
import { connectDb } from "./middleware/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`), connectDb();
});
