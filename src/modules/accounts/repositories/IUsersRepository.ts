import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { User } from "../entities/User";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  update(data: IUpdateUserDTO): Promise<void>;
  createAdmin(data: ICreateUserDTO): Promise<void>;
  createGym(data: ICreateUserDTO): Promise<void>;
  findByEmail(email): Promise<User>;
  findByUsername(username): Promise<User>;
  findById(id): Promise<User>;
}

export { IUsersRepository };
