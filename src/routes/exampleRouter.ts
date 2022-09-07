import { Router } from "express";

import exampleControllers from "../controllers/exampleController";

const exampleRouter = Router();

exampleRouter.get("/", exampleControllers.exampleController);

export default exampleRouter;