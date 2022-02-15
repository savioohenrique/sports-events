import { UpdateResult } from "typeorm";
import { ICreateGymDTO } from "../dtos/ICreateGymDTO";
import { IUpdateGymLocationDTO } from "../dtos/IUpdatedGymLocationDTO";
import { IUpdateGymDTO } from "../dtos/IUpdateGymDto";
import { Gym } from "../entities/Gym";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IGymsRepository {
  create(user_id: string, data: ICreateGymDTO): Promise<void>;
  findById(id: string): Promise<Gym>;
  findAll(): Promise<Gym[]>;
  update(
    id: string,
    user_id: string,
    data: IUpdateGymDTO
  ): Promise<UpdateResult>;
  updateLocation(
    id: string,
    user_id: string,
    data: IUpdateGymLocationDTO
  ): Promise<UpdateResult>;
  delete(id: string, user_id: string): Promise<any>;
}

export { IGymsRepository };
