import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidationSchema } from "./products.validation";
import { ProductControllers } from "./products.controller";
const router = express.Router();

router.post(
  "/products",
  validateRequest(ProductValidationSchema),
  ProductControllers.createProduct
);

export const ProductsRouter = router;
