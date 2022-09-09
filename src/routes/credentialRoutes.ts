import { Router } from "express";

import credentialMiddlewares from "../middlewares/credentialMiddlewares.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";
import credentialController from "../controllers/credentialController.js";

const credentialRouter = Router();

credentialRouter.post("/credentials/create", genericMiddlewares.validateToken ,credentialMiddlewares.validateCreateSchema ,credentialController.create);

export default credentialRouter;