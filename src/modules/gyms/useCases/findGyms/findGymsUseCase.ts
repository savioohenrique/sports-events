import { inject, injectable } from "tsyringe";

import { Gym } from "../../entities/Gym";
import { IGymsRepository } from "../../repositories/IGymsRepository";

@injectable()
class FindGymsUseCase {
  constructor(
    @inject("GymsRepository")
    private gymsRepository: IGymsRepository
  ) {}

  async execute(): Promise<Gym[]> {
    const gyms = await this.gymsRepository.findAll();

    return gyms;
  }
}

export { FindGymsUseCase };
