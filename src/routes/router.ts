import { Router } from "express";

import authRouter from "./authRoutes.js";
import credentialRouter from "./credentialRoutes.js";
import securityNoteRouter from "./securityNoteRoutes.js";
import cardRouter from "./cardRoutes.js";
import wifiRouter from "./wifiRoutes.js";
import documentRouter from "./documentRoutes.js";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(securityNoteRouter);
router.use(cardRouter);
router.use(wifiRouter);
router.use(documentRouter);

export default router;