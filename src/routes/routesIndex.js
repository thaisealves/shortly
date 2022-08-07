import { Router } from "express";
import userRoutes from "./userRoutes.js";
import urlsRoutes from "./urlsRoutes.js";
const router = Router();

router.use(userRoutes);
router.use(urlsRoutes);

export default router;
