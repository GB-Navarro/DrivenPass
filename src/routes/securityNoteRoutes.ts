import { Router } from "express";

import securityNoteController from "../controllers/securityNoteController.js";
import securityNoteMiddlewares from "../middlewares/securityNoteMiddlewares.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";

const securityNoteRouter = Router();

securityNoteRouter.post("/securityNotes/create", genericMiddlewares.validateToken, securityNoteMiddlewares.validateCreateSchema, securityNoteController.create);
securityNoteRouter.get("/securityNotes/search", genericMiddlewares.validateToken, securityNoteController.search);
securityNoteRouter.get("/securityNotes/search/:id", genericMiddlewares.validateToken, securityNoteController.searchById);
securityNoteRouter.delete("/securityNotes/delete/:id", genericMiddlewares.validateToken, securityNoteController.deleteById);

export default securityNoteRouter;