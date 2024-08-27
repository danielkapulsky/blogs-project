import express  from "express";
import { logIn, signUp } from "../controllers/users";


const router = express.Router()

router.post("/signUp", signUp);
router.post("/logIn", logIn);
router.get("/", () => console.log("get all"));
router.get("/:id", () => console.log("get userById"));
router.put(":id", () => console.log("edit userById"));
router.delete("/:id", () => console.log("delete userById"))

export default router;