import { Router } from "express";
import {
  shortenMiddleware,
  getShortenMiddleware,
  openShortenMiddleware,
  deleteShortenMiddleware,
} from "../middlewares/urlsMiddlewares.js";
import {
  postShorten,
  getShortenById,
  openShorten,
  deleteShorten,
} from "../controllers/urlsControllers.js";
const router = Router();

router.post("/urls/shorten", shortenMiddleware, postShorten);
router.get("/urls/:id", getShortenMiddleware, getShortenById);
router.get("/urls/open/:shortUrl", openShortenMiddleware, openShorten);
router.delete("/urls/:id", deleteShortenMiddleware, deleteShorten);
export default router;
