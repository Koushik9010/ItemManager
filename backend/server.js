import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const __dirname = path.resolve();

//middleware
app.use(express.json()); //allows us to accept json data in the req.body

app.use("/api/v1/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

const port = process.env.PORT;
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
