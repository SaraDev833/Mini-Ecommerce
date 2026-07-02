import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import productRoute from "./Routes/productRoute.js";
import CategoryRoute from "./Routes/CategoryRoute.js"
import connectDB from "./config/db.js";
const app = express();
const port = 3000;

dotenv.config()
// connectdb
connectDB()

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/products", productRoute);
app.use("/api/categories" , CategoryRoute)

// test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});