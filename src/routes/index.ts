import { Router } from "express";

import { authenticateRoutes } from "./authentication.route";
import { usersRoutes } from "./users.routes";

import { gymsRoutes } from "./gyms.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);

router.use("/gyms", gymsRoutes);

export { router };
