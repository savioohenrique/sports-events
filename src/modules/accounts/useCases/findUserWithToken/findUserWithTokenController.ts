import { Request, Response } from "express";

class FindUserWithTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.json(request.body.user_token).send();
  }
}

export { FindUserWithTokenController };
