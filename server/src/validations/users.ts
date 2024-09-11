import { body } from "express-validator";

export const userValidation = [
    body("username").isString().withMessage("username must be a string")
    .isLength({min:2, max:100}).withMessage("username must be between 2-100 characters"),
    body("email").isString().withMessage("email must be a string")
    .isEmail().withMessage("Must be a valid email adrress"),
    body("password").isString().withMessage("text must be a string")
    .isStrongPassword().withMessage("Password is not strong enough"),
    body("image").isString().withMessage("image url must be a string")
    .isURL().withMessage('Please enter a valid URL'),
]