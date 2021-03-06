import * as Yup from "yup";

export const listingEditSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required()
    .label("Price"),
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().required().label("Description"),
  images: Yup.array().min(1, "Please select at least one image"),
  // images: Yup.object().nullable().required().label("Images"),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
    .required()
    .label("Name"),
  email: Yup.string()
    .email("Please input a valid email account")
    .required()
    .label("Email"),
  password: Yup.string().required().label("Password"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please input a valid email account")
    .required()
    .label("Email"),
  password: Yup.string().required().label("Password"),
});
