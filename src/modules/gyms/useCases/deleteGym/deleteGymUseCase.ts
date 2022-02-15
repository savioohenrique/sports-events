import { inject, injectable } from "tsyringe";

import { IGymsRepository } from "../../repositories/IGymsRepository";

@injectable()
class DeleteGymUseCase {
  constructor(
    @inject("GymsRepository")
    private gymsRepository: IGymsRepository
  ) {}

  async execute(id: string, user_id: string): Promise<void> {
    await this.gymsRepository.delete(id, user_id);
  }
}

export { DeleteGymUseCase };
