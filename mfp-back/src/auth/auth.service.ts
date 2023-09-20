import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO, createUserDTO } from 'src/users/user.dto';
import { Helper } from 'src/Helpers/helper';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private helper: Helper,
  ) {}

  async signIn(createUser: createUserDTO): Promise<any> {
    const user = await this.usersService.findOneByEmail(createUser.email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const isCorrectPassword = this.helper.comparePassword(
      createUser.password,
      user.password,
    );
    if (!isCorrectPassword) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: UserDTO) {
    return this.usersService.create(signUpDto);
  }
}
