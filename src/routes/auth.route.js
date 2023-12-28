import { Router } from 'express';
const router = Router();
import { login } from "../Controllers/auth.controller.js";

router.post("/", login);

export default router;
