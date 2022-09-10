import { Router } from "express";

import cardController from "../controllers/cardController.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";

const cardRouter = Router();

cardRouter.post("/cards/create", genericMiddlewares.validateToken ,cardController.create);

export default cardRouter;