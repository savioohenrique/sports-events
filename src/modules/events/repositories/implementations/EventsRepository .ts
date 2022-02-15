import { getRepository, Repository, UpdateResult } from "typeorm";

import { ICreateEventDTO } from "../../dtos/ICreateEventDTO";
import { IUpdateEventDto } from "../../dtos/IUpdateEventDTO";
import { Event } from "../../entities/Event";
import { IEventsRepository } from "../IEventsRepository";

class EventsRepository implements IEventsRepository {
  private repository: Repository<Event>;

  constructor() {
    this.repository = getRepository(Event);
  }

  async create(user_id: string, {
    name,
    description,
    capacity,
    gym_id
  }: ICreateEventDTO): Promise<void> {
    await this.repository.query(
      "INSERT INTO events (name, description, capacity, gym_id) " +
      "VALUES ($1, $2, $3, $4)",
      [name, description, capacity, gym_id]
    );
    
    return Promise.resolve(undefined);
  }

  async findById(id: string): Promise<Event> {
    const event = await this.repository.findOne({ id, active: true });

    return event;
  }

  async findAll(): Promise<Event[]> {
    const event = await this.repository.find({ active: true });

    return event;
  }

  async update(id: string, user_id: string, { 
    name,
    description,
    capacity,
    gym_id}: IUpdateEventDto): Promise<UpdateResult> {
      const event = await this.repository.findOne(id);

      const newValues = {
        name: !name ? event.name : name,
        description: !description ? event.description : description,
        capacity: !capacity ? event.capacity : capacity,
        gym_id: !gym_id ? event.gym_id : gym_id,
      };

      const updated_event = await this.repository.query(
        'UPDATE events SET name = $1, description = $2, capacity = $3, gym_id = $4' +
        'WHERE id = $5',
        [newValues.name, newValues.description, newValues.capacity, newValues.gym_id, id]
      );

    return updated_event;
  }

  async delete(id: string, user_id: string): Promise<any> {
    const event = await this.repository.findOne({ id, active: true });
    
    if(!event){
      return false;
    }

    event.active = false;
    
    const updated_event = await this.repository.save(event);

    return updated_event;
  }
}

export { EventsRepository };
