import express from "express";
import cors from "cors";
import productRoute from "./Routes/productRoute.js";
import CategoryRoute from "./Routes/CategoryRoute.js"
const app = express();
const port = 3000;

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