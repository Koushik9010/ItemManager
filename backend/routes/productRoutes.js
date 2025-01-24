import express from "express";
import {
  addProductController,
  deleteProductController,
  getAppProductsController,
  updateProductController,
} from "../controllers/productController.js";

const router = express.Router();

//add products
router.post("/addProduct", addProductController);

//delete
router.delete("/deleteProduct/:id", deleteProductController);

//get all products
router.get("/allProducts", getAppProductsController);

//update product
router.put("/updateProduct/:id", updateProductController);

export default router;
