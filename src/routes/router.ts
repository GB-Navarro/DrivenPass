import { Router } from "express";

import exampleRouter from "./exampleRouter.js";
import authRouter from "./authRoutes.js";
import credentialRouter from "./credentialRoutes.js";

const router = Router();

router.use(exampleRouter);
router.use(authRouter);
router.use(credentialRouter);

export default router;