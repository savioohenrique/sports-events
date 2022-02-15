import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";
import { AppError } from "../../../../errors/AppError";
import { IUpdateGymLocationDTO } from "../../dtos/IUpdatedGymLocationDTO";

import { IGymsRepository } from "../../repositories/IGymsRepository";

@injectable()
class UpdateGymLocationUseCase {
  constructor(
    @inject("GymsRepository")
    private gymsRepository: IGymsRepository
  ) {}

  async execute(
    id: string,
    user_id: string,
    { latitude, longitude }: IUpdateGymLocationDTO
  ): Promise<any> {
    if (!latitude || !longitude) {
      throw new AppError("Latitude and Longitude must be provided");
    }

    const updated_gym = await this.gymsRepository.updateLocation(id, user_id, {
      latitude,
      longitude,
    });

    return updated_gym;
  }
}

export { UpdateGymLocationUseCase };
