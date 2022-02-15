import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./updateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, name, email } = request.body;

    const createUserUseCase = container.resolve(UpdateUserUseCase);

    await createUserUseCase.execute({
      id: request.body.user_token.user.id,
      username,
      name,
      email,
    });
    return response.status(204).send();
  }
}

export { UpdateUserController };
