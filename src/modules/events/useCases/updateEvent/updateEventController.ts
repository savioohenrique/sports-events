import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateEventUseCase } from "./updateEventUseCase";

class UpdateEventController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, capacity, gym_id } = request.body;
    const {... search } = request.params;
    const id: string = search.id as string;

    const user_id = request.body.user_token.user.id;
    
    const updateEventUseCase = container.resolve(UpdateEventUseCase);

    const updated_gym = await updateEventUseCase.execute(id, user_id, { name, description, capacity, gym_id });
    
    return response.status(200).send(updated_gym);
  }
  
}

export { UpdateEventController };
