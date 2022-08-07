import { Router } from "express";
import { signUpMiddleware, signInMiddleware} from "../middlewares/userMiddlewares.js";
import { signUp, signIn } from "../controllers/userController.js";

const router = Router();

router.post("/signup", signUpMiddleware, signUp);
router.post("/signin", signInMiddleware, signIn);

export default router;
