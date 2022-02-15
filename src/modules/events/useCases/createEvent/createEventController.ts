import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateEventUseCase } from "./createEventUseCase";

class CreateEventController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, capacity, gym_id } = request.body;

    const user_id = request.body.user_token.user.id;

    const createEventUseCase = container.resolve(CreateEventUseCase);

    await createEventUseCase.handle(user_id, { name, description, capacity, gym_id });
    return response.status(201).send();
  }
  
}

export { CreateEventController };
