import { Router } from 'express';
const router = Router();
import { createNewsController, findAllNewsController, topNewsController, findByIdController, searchByTitleController, byUserController, updateUserController } from '../Controllers/news.controller.js';
import { authMiddleware } from "../middlewares/auth.middlewares.js";

router.post("/", authMiddleware, createNewsController);
router.get("/", findAllNewsController);
router.get("/top", topNewsController);
router.get("/search", searchByTitleController);
router.get("/byUser", authMiddleware, byUserController);
router.get("/:id", authMiddleware, findByIdController);
router.patch("/:id", authMiddleware, updateUserController);

export default router;