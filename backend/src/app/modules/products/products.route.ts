import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidationSchema } from "./products.validation";
import { ProductControllers } from "./products.controller";
const router = express.Router();

router.post(
  "/",
  validateRequest(ProductValidationSchema),
  ProductControllers.CreateProduct
);

router.get("/", ProductControllers.GetAllProducts);
router.get("/:id", ProductControllers.GetProductById)

export const ProductsRouter = router;
