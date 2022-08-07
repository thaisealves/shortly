import { Router } from "express";
import { shortenMiddleware } from "../middlewares/urlsMiddlewares.js";
import { postShorten } from "../controllers/urlsControllers.js";
const router = Router();

router.post("/urls/shorten", shortenMiddleware, postShorten);

export default router;
