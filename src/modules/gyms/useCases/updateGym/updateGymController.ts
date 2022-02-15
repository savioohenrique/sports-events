import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateGymUseCase } from "./updateGymUseCase";

class UpdateGymController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const { ...search } = request.params;
    const id: string = search.id as string;

    const user_id = request.body.user_token.user.id;

    const updateGymUseCase = container.resolve(UpdateGymUseCase);

    const updated_gym = await updateGymUseCase.execute(id, user_id, {
      name,
      description,
    });

    return response.status(200).send(updated_gym);
  }
}

export { UpdateGymController };
