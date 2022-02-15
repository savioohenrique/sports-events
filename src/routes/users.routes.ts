import { Router } from "express";
import multer from "multer";
import "reflect-metadata";

import { adminAuthenticate } from "../middlewares/adminAuthenticate";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/createUserController";
import { CreateUserAdminController } from "../modules/accounts/useCases/createUserAdmin/createUserAdminController";
import { CreateUserGymController } from "../modules/accounts/useCases/createUserGym/createUserGymController";
import { FindUserWithTokenController } from "../modules/accounts/useCases/findUserWithToken/findUserWithTokenController";
import { UpdateUserController } from "../modules/accounts/useCases/updateUser/updateUserController";

const usersRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createUserController = new CreateUserController();
const createUserAdminController = new CreateUserAdminController();
const createUserGymController = new CreateUserGymController();
const findUserWithTokenController = new FindUserWithTokenController();
const updateUserController = new UpdateUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.put("/", ensureAuthenticated, updateUserController.handle);
usersRoutes.get("/", ensureAuthenticated, findUserWithTokenController.handle);

usersRoutes.post(
  "/create-admin",
  ensureAuthenticated,
  adminAuthenticate,
  createUserAdminController.handle
);
usersRoutes.post(
  "/create-gym",
  ensureAuthenticated,
  adminAuthenticate,
  createUserGymController.handle
);
usersRoutes.put(
  "/update-account",
  ensureAuthenticated,
  adminAuthenticate,
  updateUserController.handle
);

export { usersRoutes };
