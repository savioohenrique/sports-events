import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateGymUseCase } from "./createGymUseCase";

class CreateGymController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, latitude, longitude, cep, number } =
      request.body;

    const user_id = request.body.user_token.user.id;

    const createGymUseCase = container.resolve(CreateGymUseCase);

    await createGymUseCase.create(user_id, {
      name,
      description,
      latitude,
      longitude,
      cep,
      number,
    });
    return response.status(201).send();
  }
}

export { CreateGymController };
