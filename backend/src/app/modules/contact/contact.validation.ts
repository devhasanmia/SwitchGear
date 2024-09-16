import { z } from "zod";

const contactValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a String",
    }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string({
      required_error: "Phone is required",
      invalid_type_error: "Invalid Phone Number",
    }),
    message: z.string({
      required_error: "Message is required",
    }),
  }),
});

export default contactValidationSchema;
