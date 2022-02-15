import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IRequest {
  email?: string;
  username?: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IResponse {
  user: {
    name: string;
    email: string;
    username: string;
    active: boolean;
    role: number;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, username, password }: IRequest): Promise<IResponse> {
    let user;

    if (email && email !== "") {
      user = await this.usersRepository.findByEmail(email);
    } else if (username && username !== "") {
      user = await this.usersRepository.findByUsername(username);
    } else {
      throw new AppError("Login obrigatory");
    }

    if (!user) {
      throw new AppError("Login or Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Login or Password incorrect");
    }

    const token = sign({}, "0cb6aaaeae511c4a0cab75d7e489dda4", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
        username: user.username,
        active: user.active,
        role: user.role,
      },
      token,
    };
    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
