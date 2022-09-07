import { Router } from "express";

import exampleControllers from "../controllers/exampleController.js";

const exampleRouter = Router();

exampleRouter.get("/", exampleControllers.exampleController);

export default exampleRouter;