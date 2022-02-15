import { getRepository, Repository, UpdateResult } from "typeorm";

import axios from "axios";
import { ICreateGymDTO } from "../../dtos/ICreateGymDTO";
import { IUpdateGymLocationDTO } from "../../dtos/IUpdatedGymLocationDTO";
import { IUpdateGymDTO } from "../../dtos/IUpdateGymDto";
import { Gym } from "../../entities/Gym";
import { IGymsRepository } from "../IGymsRepository";

class GymsRepository implements IGymsRepository {
  private repository: Repository<Gym>;

  constructor() {
    this.repository = getRepository(Gym);
  }

  async create(
    user_id: string,
    { name, description, latitude, longitude, cep, number }: ICreateGymDTO
  ): Promise<void> {
    await this.repository.query(
      "INSERT INTO gyms (name, description, location, user_id, cep , number)" +
        "VALUES ($1, $2, ST_SetSRID(ST_MakePoint($3, $4), 4326), $5, $6,$7)",
      [name, description, latitude, longitude, user_id, cep, number]
    );

    return Promise.resolve(undefined);
  }

  async findById(id: string): Promise<Gym> {
    const gym = await this.repository.findOne({ id, active: true });
    const address = await axios
      .get(`https://viacep.com.br/ws/${gym.cep}/json/`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return null;
      });

    gym.address = address;

    return gym;
  }

  async findAll(): Promise<Gym[]> {
    const gym = await this.repository.find({ active: true });

    return gym;
  }

  async update(
    id: string,
    user_id: string,
    { name, description }: IUpdateGymDTO
  ): Promise<UpdateResult> {
    const gym = await this.repository.findOne(id);

    const newValues = {
      name: !name ? gym.name : name,
      description: !description ? gym.description : description,
    };

    const updated_gym = await this.repository.query(
      "UPDATE gyms SET name = $1, description = $2 " +
        "WHERE id = $3 AND user_id = $4",
      [newValues.name, newValues.description, id, user_id]
    );

    return updated_gym;
  }

  async updateLocation(
    id: string,
    user_id: string,
    { latitude, longitude }: IUpdateGymLocationDTO
  ): Promise<UpdateResult> {
    const updated_gym = await this.repository.query(
      "UPDATE gyms SET location = ST_SetSRID(ST_MakePoint($1, $2), 4326)" +
        "WHERE id = $3 AND user_id = $4",
      [latitude, longitude, id, user_id]
    );

    return updated_gym;
  }

  async delete(id: string, user_id: string): Promise<any> {
    const gym = await this.repository.findOne({ id, active: true, user_id });

    if (!gym) {
      return false;
    }

    gym.active = false;

    const updated_gym = await this.repository.save(gym);

    return updated_gym;
  }
}

export { GymsRepository };
