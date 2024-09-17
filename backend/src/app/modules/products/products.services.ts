import mongoose from "mongoose";
import { TProducts } from "./products.interface";
import Products from "./products.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const CreateProduct = async (payload: TProducts) => {
  const result = await Products.create(payload);
  return result;
};

const GetAllProducts = async () => {
  const result = await Products.find();
  if (result.length === 0) {
    return { message: "No products found." };
  }
  return result;
};

const GetProductById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(400, "Invalid product ID format.");
  }
  const product = await Products.findById(id);
  if (!product) {
    throw new AppError(404, "Product not found.");
  }
  return product;
};

export const ProductServices = {
  CreateProduct,
  GetAllProducts,
  GetProductById,
};
