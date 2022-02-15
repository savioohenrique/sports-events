import { Router } from "express";
import "reflect-metadata";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/authenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/login", authenticateUserController.handle);

authenticateRoutes.use(ensureAuthenticated);
export { authenticateRoutes };
