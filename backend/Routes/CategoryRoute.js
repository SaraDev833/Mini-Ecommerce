import express from "express";
import categories from "../Data/Category.js";


const router = express.Router();

// get all category link

router.get("/" , (req , res)=>{
    res.json(categories)
})

export default router
