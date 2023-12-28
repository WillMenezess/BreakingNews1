import { Router } from 'express';
const router = Router();
import { createNewsController, findAllNewsController } from '../Controllers/news.controller.js';
import { authMiddleware } from "../middlewares/auth.middlewares.js";

router.post("/", authMiddleware, createNewsController)
router.get("/", findAllNewsController)

export default router;