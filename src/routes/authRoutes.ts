import { Router } from "express";

import authMiddlewares from "../middlewares/authMiddlewares.js";
import authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", authMiddlewares.validateSignUpSchema, authController.signUp);
authRouter.post("/sign-in", authController.signIn)

export default authRouter;