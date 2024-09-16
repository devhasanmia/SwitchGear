import { TContact } from "./contact.interface";
import Contact from "./contact.model";

const createContact = async (payload: TContact) => {
  const result = await Contact.create(payload);
  return result;
};

export const ContactServices = {
  createContact: createContact,
};
