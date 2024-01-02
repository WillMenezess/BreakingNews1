import { Router } from 'express';
const router = Router();
import { createNewsController, findAllNewsController, topNewsController, findByIdController } from '../Controllers/news.controller.js';
import { authMiddleware } from "../middlewares/auth.middlewares.js";

router.post("/", authMiddleware, createNewsController);
router.get("/", findAllNewsController);
router.get("/top", topNewsController);
router.get("/:id", findByIdController);

export default router;