import { Router } from "express";

import wifiController from "../controllers/wifiController.js";
import genericMiddlewares from "../middlewares/genericMiddlewares.js";
import wifiMiddlewares from "../middlewares/wifiMiddlewares.js";

const wifiRouter = Router();

wifiRouter.post("/wifi/create", genericMiddlewares.validateToken, wifiMiddlewares.validateCreateSchema ,wifiController.create);
wifiRouter.get("/wifis/search", genericMiddlewares.validateToken ,wifiController.search);
wifiRouter.get("/wifis/search/:id", genericMiddlewares.validateToken ,wifiController.searchById);

export default wifiRouter;