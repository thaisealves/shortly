import { Router } from "express";
import {
  signUpMiddleware,
  signInMiddleware,
  getUserMiddleware
} from "../middlewares/userMiddlewares.js";
import { signUp, signIn, getUser} from "../controllers/userController.js";

const router = Router();

router.post("/signup", signUpMiddleware, signUp);
router.post("/signin", signInMiddleware, signIn);
router.get("/users/me", getUserMiddleware, getUser);
export default router;
