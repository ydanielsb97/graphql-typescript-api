import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "../dto/createUser.dto";
import User from "../entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.findOne({
      where: {
        userName: createUserDto.userName,
      },
    });

    if (user) return { error: "User already exists" };

    const newUser = this.create(createUserDto);
    
    return await this.save(newUser);
  }

  async findByUsername(userName: string): Promise<User | undefined> {
    return await this.findOne({where: {userName}})
  }

  async findById(id: number) {
    return await this.findOne(id, {select: ['firstName', 'lastName', "id", 'email']})
  }

}
