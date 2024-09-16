import { Router } from "express";
import { ContactRouter } from "../modules/contact/contact.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: ContactRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
