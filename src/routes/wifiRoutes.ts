import { Router } from "express";

import wifiController from "../controllers/wifiController.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";

const wifiRouter = Router();

wifiRouter.post("/wifi/create", genericMiddlewares.validateToken ,wifiController.create);

export default wifiRouter;