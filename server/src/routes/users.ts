import express  from "express";


const router = express.Router()

router.post("/signUp", () => console.log("signUp"));
router.post("/logIn", () => console.log("logIn"));
router.get("/", () => console.log("get all"));
router.get("/:id", () => console.log("get userById"));
router.put(":id", () => console.log("edit userById"));
router.delete("/:id", () => console.log("delete userById"))

export default router;