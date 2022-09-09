import { Router } from "express";

import credentialMiddlewares from "../middlewares/credentialMiddlewares.js";
import credentialController from "../controllers/credentialController.js";

const credentialRouter = Router();

credentialRouter.post("/credentials/create", credentialMiddlewares.validateCreateSchema ,credentialController.create);

export default credentialRouter;