import { Router } from "express";
import exampleControllers from "../controllers/exampleController.js";
var exampleRouter = Router();
exampleRouter.get("/", exampleControllers.exampleController);
export default exampleRouter;
