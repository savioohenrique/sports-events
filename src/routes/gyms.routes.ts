import { Router } from "express";
import multer from "multer";
import "reflect-metadata";

import { gymAuthenticate } from "../middlewares/gymAuthenticate";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateGymController } from "../modules/gyms/useCases/createGym/createGymController";
import { FindGymByIdController } from "../modules/gyms/useCases/findGymById/findGymByIdController";
import { FindGymsController } from "../modules/gyms/useCases/findGyms/findGymsController";
import { UpdateGymController } from "../modules/gyms/useCases/updateGym/updateGymController";
import { UpdateGymLocationController } from "../modules/gyms/useCases/updateGymLocation/updateGymLocationController";
import { DeleteGymController } from "../modules/gyms/useCases/deleteGym/deleteGymController";

const gymsRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createGymController = new CreateGymController();
const findGymByIdController = new FindGymByIdController();
const findGymsController = new FindGymsController();
const updateGymController = new UpdateGymController();
const updateGymLocationController = new UpdateGymLocationController();
const deleteGymController = new DeleteGymController();

gymsRoutes.post(
  "/",
  ensureAuthenticated,
  gymAuthenticate,
  createGymController.create
);

gymsRoutes.get("/", ensureAuthenticated, findGymsController.handle);

gymsRoutes.get("/:id", ensureAuthenticated, findGymByIdController.handle);

gymsRoutes.put(
  "/:id",
  ensureAuthenticated,
  gymAuthenticate,
  updateGymController.handle
);

gymsRoutes.put(
  "/:id/location",
  ensureAuthenticated,
  gymAuthenticate,
  updateGymLocationController.handle
);

gymsRoutes.delete(
  "/:id",
  ensureAuthenticated,
  gymAuthenticate,
  deleteGymController.handle
);

export { gymsRoutes };
