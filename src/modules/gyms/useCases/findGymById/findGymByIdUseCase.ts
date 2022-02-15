import { inject, injectable } from "tsyringe";

import { Gym } from "../../entities/Gym";
import { IGymsRepository } from "../../repositories/IGymsRepository";

@injectable()
class FindGymByIdUseCase {
  constructor(
    @inject("GymsRepository")
    private gymsRepository: IGymsRepository
  ) {}

  async execute(id: string): Promise<Gym> {
    const gym = await this.gymsRepository.findById(id);

    return gym;
  }
}

export { FindGymByIdUseCase };
