import { inject, injectable } from "tsyringe";

import { IEventsRepository } from "../../repositories/IEventsRepository";

@injectable()
class DeleteEventUseCase {
  constructor(
    @inject("EventsRepository")
    private eventsRepository: IEventsRepository
  ) {}

  async execute(id: string, user_id: string): Promise<void> {
    await this.eventsRepository.delete(id, user_id);
  }

}

export { DeleteEventUseCase };
