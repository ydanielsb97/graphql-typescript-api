import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "../dto/createUser.dto";
import { User } from "../entities/user";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User | {}> {
    const user = this.findOne({
      where: {
        userName: createUserDto.userName,
      },
    });

    if (!user) return { error: "User already exists" };

    return await this.insert(createUserDto);
  }
}
