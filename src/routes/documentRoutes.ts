import { Router } from "express";

import documentController from "../controllers/documentController.js";
import documentMiddlewares from "../middlewares/documentMiddlewares.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";

const documentRouter = Router();

documentRouter.post("/documents/create", genericMiddlewares.validateToken, documentMiddlewares.validateCreateSchema ,documentController.create);

export default documentRouter;