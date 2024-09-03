import express  from "express";
import { deleteUserById, editUserById, getAll, getUserById, logIn, signUp } from "../controllers/users";


const router = express.Router()

router.post("/signUp", signUp);
router.post("/logIn", logIn);
router.get("/", getAll);
router.get("/:id", getUserById);
router.put("/:id", editUserById);
router.delete("/:id", deleteUserById)

export default router;