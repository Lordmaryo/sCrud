import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.put("/update/:id", updateProduct);

router.post("/", addProduct);

router.delete("/delete/:id", deleteProduct);

export default router;
