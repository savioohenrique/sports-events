import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserAdminUseCase } from "./createUserAdminUseCase";

class CreateUserAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, username, name, email } = request.body;

    const createUserUseCase = container.resolve(CreateUserAdminUseCase);

    await createUserUseCase.execute({ password, username, name, email });
    return response.status(201).send();
  }
}

export { CreateUserAdminController };
