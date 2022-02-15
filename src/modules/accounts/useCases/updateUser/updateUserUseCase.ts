import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id, username, name, email }: IUpdateUserDTO): Promise<void> {
    await this.usersRepository.update({
      id,
      username,
      name,
      email,
    });
  }
}

export { UpdateUserUseCase };
