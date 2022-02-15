import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    password,
    username,
    name,
    email,
  }: ICreateUserDTO): Promise<void> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    const usernameAlreadyExists = await this.usersRepository.findByUsername(
      username
    );

    if (emailAlreadyExists) {
      throw new AppError("Users already exists");
    } else if (usernameAlreadyExists) {
      throw new AppError("Users already exists");
    }

    const passwordHash = await hash(password, 8);
    await this.usersRepository.create({
      password: passwordHash,
      username,
      name,
      email,
    });
  }
}

export { CreateUserUseCase };
