import { Router } from "express";
import { shortenMiddleware } from "../middlewares/urlsMiddlewares.js";
import {
  postShorten,
  getShortenById,
  openShorten,
} from "../controllers/urlsControllers.js";
const router = Router();

router.post("/urls/shorten", shortenMiddleware, postShorten);
router.get("/urls/:id", getShortenById);
router.get("/urls/open/:shortUrl", openShorten);
export default router;
