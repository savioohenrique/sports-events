import { inject, injectable } from "tsyringe";

import { ICreateGymDTO } from "../../dtos/ICreateGymDTO";
import { Gym } from "../../entities/Gym";
import { IGymsRepository } from "../../repositories/IGymsRepository";

@injectable()
class CreateGymUseCase {
  constructor(
    @inject("GymsRepository")
    private gymsRepository: IGymsRepository
  ) {}

  async create(
    user_id: string,
    { name, description, latitude, longitude, cep, number }: ICreateGymDTO
  ): Promise<void> {
    await this.gymsRepository.create(user_id, {
      name,
      description,
      latitude,
      longitude,
      cep,
      number,
    });
  }

  async findById(id: string): Promise<Gym> {
    const gym = await this.gymsRepository.findById(id);

    return gym;
  }

  async findAll(): Promise<Gym[]> {
    const gyms = await this.gymsRepository.findAll();

    return gyms;
  }
}

export { CreateGymUseCase };
