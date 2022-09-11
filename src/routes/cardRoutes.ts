import { Router } from "express";

import cardController from "../controllers/cardController.js";
import cardMiddlewares from "../middlewares/cardMiddlewares.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";

const cardRouter = Router();

cardRouter.post("/cards/create", genericMiddlewares.validateToken, cardMiddlewares.validateCreateSchema ,cardController.create);
cardRouter.get("/cards/search", genericMiddlewares.validateToken ,cardController.search);
cardRouter.get("/cards/search/:id", genericMiddlewares.validateToken ,cardController.searchById);
export default cardRouter;