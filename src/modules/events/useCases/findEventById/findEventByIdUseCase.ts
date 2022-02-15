import { inject, injectable } from "tsyringe";

import { Event } from "../../entities/Event";
import { IEventsRepository } from "../../repositories/IEventsRepository";

@injectable()
class FindEventByIdUseCase {
  constructor(
    @inject("EventsRepository")
    private eventsRepository: IEventsRepository
  ) {}

  async execute(id: string): Promise<Event> {
    const event = await this.eventsRepository.findById(id);

    return event;
  }

}

export { FindEventByIdUseCase };
