import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from '../Services/auth.service';
import { AuthGuard } from '../Guards/auth.guard';
import { createUserDTO } from 'src/modules/users/dto/create-user.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({
    description: 'Login du user via le createUserDTO, creating a JWT',
  })
  async login(@Body() signInDto: createUserDTO) {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signUp')
  @UsePipes(new ValidationPipe())
  @ApiOperation({
    description: 'SignUp du user via le createUserDTO, creating a JWT',
  })
  async signUp(@Body() signUpDto: createUserDTO) {
    return this.authService.signUp(signUpDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
