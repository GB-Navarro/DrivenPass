import { Router } from "express";

import credentialController from "../controllers/credentialController.js";

const credentialRouter = Router();

credentialRouter.post("/credentials/create", credentialController.create);

export default credentialRouter;