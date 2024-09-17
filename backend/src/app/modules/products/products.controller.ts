import { RequestHandler } from "express";
import { ProductServices } from "./products.services";
import httpStatus from "http-status";

const CreateProduct: RequestHandler = async (req, res, next) => {
    try {
        const product = await ProductServices.CreateProduct(req.body);
        res.status(200).json({
            statusCode: httpStatus.OK,
            success: true,
            message: "Product created successfully.",
            data: product,
        })
    } catch (err) {
        next(err);
    }
};

const GetAllProducts: RequestHandler = async (req, res, next) => {
    try {
        const products = await ProductServices.GetAllProducts();
        res.status(httpStatus.FOUND).json({
            statusCode: httpStatus.OK,
            success: true,
            message: "All products were fetched successfully.",
            data: products,
        })
    } catch (error) {
        next(error)
    }
}

const GetProductById: RequestHandler = async (req, res, next) => {
    try {
       const {id} = req.params;
       const product = await ProductServices.GetProductById(id);
       res.status(200).json({
        statusCode: httpStatus.OK,
        success: true,
        message: "All products were fetched successfully.",
        data: product,
       }) 
    } catch (error) {
        next(error)
    }
}



export const ProductControllers = {
    CreateProduct,
    GetAllProducts,
    GetProductById
}
