import { Router } from "express";
import authMiddlewares from "../middlewares/authMiddlewares.js";
import authController from "../controllers/authController.js";
var authRouter = Router();
authRouter.post("/sign-up", authMiddlewares.validateSignUpSchema, authController.signUp);
authRouter.post("/sign-in", authMiddlewares.validateSignInSchema, authController.signIn);
export default authRouter;
