import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteEventUseCase } from "./deleteEventUseCase";

class DeleteEventController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {... search } = request.params;
    const id: string = search.id as string;

    const user_id = request.body.user_token.user.id;
    
    const deleteEventUseCase = container.resolve(DeleteEventUseCase);

    const event = await deleteEventUseCase.execute(id, user_id);
    
    return response.status(200).send(event);
  }
}

export { DeleteEventController };
