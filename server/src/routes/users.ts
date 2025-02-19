import express  from "express";
import { deleteUserById, editUserById, getAll, getUserById, logIn, logout, signUp } from "../controllers/users";
import { userValidation } from "../validations/users";

const router = express.Router()

router.post("/signUp",userValidation, signUp);
router.post("/logIn", logIn);
router.get("/", getAll);
router.get("/:id", getUserById);
router.put("/:id", editUserById);
router.delete("/:id", deleteUserById);
router.post("/", logout);

export default router;