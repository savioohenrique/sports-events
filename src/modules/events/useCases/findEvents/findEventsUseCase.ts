import { inject, injectable } from "tsyringe";

import { Event } from "../../entities/Event";
import { IEventsRepository } from "../../repositories/IEventsRepository";

@injectable()
class FindEventsUseCase {
  constructor(
    @inject("EventsRepository")
    private eventsRepository: IEventsRepository
  ) {}

  async execute(): Promise<Event[]> {
    const events = await this.eventsRepository.findAll();

    return events;
  }

}

export { FindEventsUseCase };
