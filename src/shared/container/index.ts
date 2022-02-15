import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

import { GymsRepository } from "../../modules/gyms/repositories/implementations/GymsRepository ";
import { IGymsRepository } from "../../modules/gyms/repositories/IGymsRepository";

import { IEventsRepository } from "../../modules/events/repositories/IEventsRepository";
import { EventsRepository } from "../../modules/events/repositories/implementations/EventsRepository ";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IGymsRepository>(
  "GymsRepository", 
  GymsRepository
);

container.registerSingleton<IEventsRepository>(
  "EventsRepository", 
  EventsRepository
);

