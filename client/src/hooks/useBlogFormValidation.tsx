import validator from "validator";
import { IBlogError, IBlogForm } from "../interfaces/blogInterface";
import { useState } from "react";

export const useBlogFormValidation = () => {
    const [errors, setErrors] = useState<IBlogError | null>(null);
    const isValidate = (blogFormData: IBlogForm): boolean => {
        const newErrors = {} as IBlogError;

        if (validator.isEmpty(blogFormData.title)) {
            newErrors.title = "Title is required";
        } else if (!validator.isLength(blogFormData.title, { min: 2, max: 100 })) {
            newErrors.title = "Title must be between 2 and 100 characters";
        }

        if (validator.isEmpty(blogFormData.subtitle)) {
            newErrors.subtitle = "Subtitle is required";
        } else if (!validator.isLength(blogFormData.subtitle, { min: 2, max: 100 })) {
            newErrors.subtitle = "Subtitle must be between 2 and 100 characters";
        }

        if (validator.isEmpty(blogFormData.text)) {
            newErrors.text = "Text is required";
        } else if (!validator.isLength(blogFormData.text, { min: 2, max: 500 })) {
            newErrors.text = "Text must be between 2 and 500 characters";
        }

        if (validator.isEmpty(blogFormData.img)) {
            newErrors.img = "Image Url is required";
        } else if (!validator.isURL(blogFormData.img)) {
            newErrors.img = "Image must be a valid Url";
        }

        if (validator.isEmpty(blogFormData.catagory)) {
            newErrors.catagory = "Category is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return { errors, isValidate };

}