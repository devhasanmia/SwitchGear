import { z } from "zod";

const ProductValidationSchema = z.object({
  body: z.object({
    image: z.string({
      required_error: "Product image is required",
    }),
    name: z.string({
      required_error: "Product name is required",
    }),
    brand: z.string({
      required_error: "Brand is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    price: z
      .number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number",
      })
      .nonnegative("Price must be a positive number"),
    quantity: z
      .number({
        required_error: "Quantity is required",
        invalid_type_error: "Quantity must be a number",
      })
      .int("Quantity must be an integer")
      .nonnegative("Quantity must be a positive number"),
    rating: z
      .number()
      .min(0, "Rating must be at least 0")
      .max(5, "Rating must be between 0 and 5")
      .optional(),
  }),
});

export { ProductValidationSchema };
