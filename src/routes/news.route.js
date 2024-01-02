import { Router } from 'express';
const router = Router();
import { createNewsController, findAllNewsController, topNewsController } from '../Controllers/news.controller.js';
import { authMiddleware } from "../middlewares/auth.middlewares.js";

router.post("/", authMiddleware, createNewsController);
router.get("/", findAllNewsController);
router.get("/top", topNewsController);

export default router;