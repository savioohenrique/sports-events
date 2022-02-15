import { inject, injectable } from "tsyringe";

import { ICreateEventDTO } from "../../dtos/ICreateEventDTO";
import { IEventsRepository } from "../../repositories/IEventsRepository";

@injectable()
class CreateEventUseCase {
  constructor(
    @inject("EventsRepository")
    private eventsRepository: IEventsRepository
  ) {}

  async handle(user_id: string,{
    name,
    description,
    capacity,
    gym_id,
  }: ICreateEventDTO): Promise<void> {
    await this.eventsRepository.create(user_id, { name, description, capacity, gym_id });
  }

}

export { CreateEventUseCase };
