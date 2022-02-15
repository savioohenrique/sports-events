import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserGymUseCase } from "./createUserGymUseCase";

class CreateUserGymController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, username, name, email } = request.body;

    const createUserUseCase = container.resolve(CreateUserGymUseCase);

    await createUserUseCase.execute({ password, username, name, email });
    return response.status(201).send();
  }
}

export { CreateUserGymController };
