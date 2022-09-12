import { Router } from "express";

import credentialMiddlewares from "../middlewares/credentialMiddlewares.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";
import credentialController from "../controllers/credentialController.js";

const credentialRouter = Router();

credentialRouter.post("/credentials/create", genericMiddlewares.validateToken, credentialMiddlewares.validateCreateSchema, credentialController.create);
credentialRouter.get("/credentials/search", genericMiddlewares.validateToken, credentialController.search);
credentialRouter.get("/credentials/search/:id", genericMiddlewares.validateToken, credentialController.searchById);
credentialRouter.delete("/credentials/delete/:id", genericMiddlewares.validateToken, credentialController.deleteById);

export default credentialRouter;