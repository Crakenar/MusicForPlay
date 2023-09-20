import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Helper } from 'src/Helpers/helper';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, Helper],
  exports: [UsersService],
})
export class UsersModule {}
