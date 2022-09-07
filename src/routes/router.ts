import { Router } from "express";

import exampleRouter from "./exampleRouter.js";
import authRouter from "./authRoutes.js";

const router = Router();

router.use(exampleRouter);
router.use(authRouter);

export default router;