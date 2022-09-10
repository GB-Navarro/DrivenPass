import { Router } from "express";

import exampleRouter from "./exampleRouter.js";
import authRouter from "./authRoutes.js";
import credentialRouter from "./credentialRoutes.js";
import securityNoteRouter from "./securityNoteRoutes.js";

const router = Router();

router.use(exampleRouter);
router.use(authRouter);
router.use(credentialRouter);
router.use(securityNoteRouter)

export default router;