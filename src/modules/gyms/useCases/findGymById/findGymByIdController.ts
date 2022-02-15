import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindGymByIdUseCase } from "./findGymByIdUseCase";

class FindGymByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ...search } = request.params;
    const id: string = search.id as string;

    const findGymByIdUseCase = container.resolve(FindGymByIdUseCase);

    const gym = await findGymByIdUseCase.execute(id);

    return response.status(200).send(gym);
  }
}

export { FindGymByIdController };
