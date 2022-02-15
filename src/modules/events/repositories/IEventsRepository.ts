import { UpdateResult } from "typeorm";
import { ICreateEventDTO } from "../dtos/ICreateEventDTO";
import { IUpdateEventDto } from "../dtos/IUpdateEventDTO";
import { Event } from "../entities/Event";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IEventsRepository {
  create(user_id: string, data: ICreateEventDTO): Promise<void>;
  findById(id: string): Promise<Event>;
  findAll(): Promise<Event[]>;
  update(id: string, user_id: string, data: IUpdateEventDto): Promise<UpdateResult>;
  delete(id: string, user_id: string): Promise<any>;
}

export { IEventsRepository };
