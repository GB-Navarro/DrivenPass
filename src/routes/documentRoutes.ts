import { Router } from "express";

import documentController from "../controllers/documentController.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";

const documentRouter = Router();

documentRouter.post("/documents/create", genericMiddlewares.validateToken ,documentController.create);

export default documentRouter;