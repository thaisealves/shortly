import { Router } from "express";
import { signUpMiddleware } from "../middlewares/userMiddlewares.js";
import { signUp } from "../controllers/userController.js";

const router = Router();

router.post("/signup", signUpMiddleware, signUp);

export default router;
