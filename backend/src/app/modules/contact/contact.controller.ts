import { RequestHandler } from "express";
import { ContactServices } from "./contact.services";
import httpStatus from "http-status";

const createContact: RequestHandler = async (req, res, next) => {
  try {
    const contact = await ContactServices.createContact(req.body);
    res.status(200).json({
      statusCode: httpStatus.OK,
      success: true,
      message: "Your message has been successfully sent.",
      data: contact,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ContactControllers = {
  createContact,
};
