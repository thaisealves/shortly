import { Router } from "express";
import { shortenMiddleware } from "../middlewares/urlsMiddlewares.js";
const router = Router();

router.post("/urls/shorten", shortenMiddleware);

export default router;
