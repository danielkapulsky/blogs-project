import { body } from "express-validator";

export const blogValidation = [
    body("title").isString().withMessage("title must be a string")
    .isLength({min:2, max:100}).withMessage("title must be between 2-100 characters"),
    body("subtitle").isString().withMessage("subtitle must be a string")
    .isLength({min:2, max:100}).withMessage("subtitle must be between 2-100 characters"),
    body("text").isString().withMessage("text must be a string")
    .isLength({min:2, max:500}).withMessage("text must be between 2-500 characters"),
    body("img").isString().withMessage("title must be a string")
    .isURL().withMessage('Please enter a valid URL'),
]