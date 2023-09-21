import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './dto/user.dto';
import { Helper } from '../Helpers/helper';
import { createUserDTO } from './dto/create-user.dto';
export type user = User; //my model here

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private helper: Helper,
  ) {}

  async findOneByUsername(username: string): Promise<UserDTO | null> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async findOneByEmail(email: string): Promise<UserDTO | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(user: createUserDTO): Promise<UserDTO | null> {
    const userAlreadyExist = await this.findOneByEmail(user.email);
    if (userAlreadyExist) {
      throw new UnauthorizedException();
    }
    const hashPassword = await this.helper.hashPassword(
      user.password.toString(),
    );
    user.password = hashPassword;
    const createdUser = await this.usersRepository.save(user);
    return createdUser;
  }

  async findAll(): Promise<UserDTO[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<UserDTO | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
