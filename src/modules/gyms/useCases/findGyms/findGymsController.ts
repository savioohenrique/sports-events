import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindGymsUseCase } from "./findGymsUseCase";

class FindGymsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findGymsUseCase = container.resolve(FindGymsUseCase);

    const gyms = await findGymsUseCase.execute();
    return response.status(200).send(gyms);
  }
}

export { FindGymsController };
