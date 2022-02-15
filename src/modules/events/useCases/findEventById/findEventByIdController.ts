import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindEventByIdUseCase } from "./findEventByIdUseCase";

class FindEventByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {... search } = request.params;
    const id: string = search.id as string;
    
    const findEventByIdUseCase = container.resolve(FindEventByIdUseCase);

    const event = await findEventByIdUseCase.execute(id);
    
    return response.status(200).send(event);
  }
}

export { FindEventByIdController };
