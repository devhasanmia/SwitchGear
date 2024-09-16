import { RequestHandler } from "express";
import { ProductServices } from "./products.services";
import httpStatus from "http-status";

const createProduct: RequestHandler = async (req, res, next) => {
    try {
        const product = await ProductServices.createProduct(req.body);
        res.status(200).json({
            statusCode: httpStatus.OK,
            success: true,
            message: "Product successfully added!",
            data: product,
        })
    } catch (error) {
        console.log(error)
    }
};


export const ProductControllers = {
    createProduct
}
