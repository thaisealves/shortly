import { Router } from "express";
import {
  shortenMiddleware,
  getShortenMiddleware,
  openShortenMiddleware,
} from "../middlewares/urlsMiddlewares.js";
import {
  postShorten,
  getShortenById,
  openShorten,
} from "../controllers/urlsControllers.js";
const router = Router();

router.post("/urls/shorten", shortenMiddleware, postShorten);
router.get("/urls/:id", getShortenMiddleware, getShortenById);
router.get("/urls/open/:shortUrl", openShortenMiddleware, openShorten);
export default router;
