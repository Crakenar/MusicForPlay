import { Module } from '@nestjs/common';
import { AuthController } from '../auth/controllers/auth.controller';
import { AuthService } from '../auth/services/auth.service';
import { UsersModule } from 'src/modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Helper } from 'src/Helpers/helper';
@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, Helper],
})
export class AuthModule {}
