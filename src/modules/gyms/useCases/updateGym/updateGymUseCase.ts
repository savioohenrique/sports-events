import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";
import { IUpdateGymDTO } from "../../dtos/IUpdateGymDto";

import { Gym } from "../../entities/Gym";
import { IGymsRepository } from "../../repositories/IGymsRepository";

@injectable()
class UpdateGymUseCase {
  constructor(
    @inject("GymsRepository")
    private gymsRepository: IGymsRepository
  ) {}

  async execute(
    id: string,
    user_id: string,
    { name, description }: IUpdateGymDTO
  ): Promise<UpdateResult> {
    const updated_gym = await this.gymsRepository.update(id, user_id, {
      name,
      description,
    });

    return updated_gym;
  }
}

export { UpdateGymUseCase };
