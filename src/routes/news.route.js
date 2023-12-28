import { Router } from 'express';
const router = Router();
import { createNewsController, findAllNewsController } from '../Controllers/news.controller.js';

router.post("/", createNewsController)
router.get("/", findAllNewsController)

export default router;