import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import contactValidationSchema from "./contact.validation";
import { ContactControllers } from "./contact.controller";
const router = express.Router();

router.post(
  "/contact",
  validateRequest(contactValidationSchema),
  ContactControllers.createContact
);

export const ContactRouter = router;
