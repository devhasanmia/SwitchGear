import { Router } from "express";
import { ContactRouter } from "../modules/contact/contact.route";
import { ProductsRouter } from "../modules/products/products.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: ContactRouter,
  },
  {
    path: "/products",
    route: ProductsRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
