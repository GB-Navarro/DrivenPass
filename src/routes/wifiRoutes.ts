import { Router } from "express";

import wifiController from "../controllers/wifiController.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";
import wifiMiddlewares from "../middlewares/wifiMiddlewares.js";

const wifiRouter = Router();

wifiRouter.post("/wifi/create", genericMiddlewares.validateToken, wifiMiddlewares.validateCreateSchema ,wifiController.create);

export default wifiRouter;