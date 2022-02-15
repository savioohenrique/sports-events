import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";
import { IUpdateEventDto } from "../../dtos/IUpdateEventDTO";

import { IEventsRepository } from "../../repositories/IEventsRepository";

@injectable()
class UpdateEventUseCase {
  constructor(
    @inject("EventsRepository")
    private eventsRepository: IEventsRepository
  ) {}

  async execute(id: string, user_id: string, 
    { name,
      description,
      capacity,
      gym_id, }: IUpdateEventDto): Promise<UpdateResult> {
        
    const updated_event = await this.eventsRepository.update(id, user_id, { name, description, capacity, gym_id });

    return updated_event;
  }

}

export { UpdateEventUseCase };
