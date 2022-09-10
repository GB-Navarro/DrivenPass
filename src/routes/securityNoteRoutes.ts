import { Router } from "express";

import securityNoteController from "../controllers/securityNoteController.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";

const securityNoteRouter = Router();

securityNoteRouter.post("/securityNotes/Create", genericMiddlewares.validateToken ,securityNoteController.create);

export default securityNoteRouter;