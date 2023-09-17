import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'mfp',
      entities: [User],
      retryAttempts: 5,
      autoLoadEntities: true,
      synchronize: true, // not in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
