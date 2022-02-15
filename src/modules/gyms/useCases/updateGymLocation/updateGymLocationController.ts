import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateGymLocationUseCase } from "./updateGymLocationUseCase";

class UpdateGymLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude } = request.body;
    const { ...search } = request.params;
    const id: string = search.id as string;

    const user_id = request.body.user_token.user.id;

    const updateGymLocationUseCase = container.resolve(
      UpdateGymLocationUseCase
    );

    const updated_gym = await updateGymLocationUseCase.execute(id, user_id, {
      latitude,
      longitude,
    });

    return response.status(200).send(updated_gym);
  }
}

export { UpdateGymLocationController };
