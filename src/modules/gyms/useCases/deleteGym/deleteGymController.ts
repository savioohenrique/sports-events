import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteGymUseCase } from "./deleteGymUseCase";

class DeleteGymController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ...search } = request.params;
    const id: string = search.id as string;

    const user_id = request.body.user_token.user.id;

    const deleteGymUseCase = container.resolve(DeleteGymUseCase);

    const gym = await deleteGymUseCase.execute(id, user_id);

    return response.status(200).send(gym);
  }
}

export { DeleteGymController };
