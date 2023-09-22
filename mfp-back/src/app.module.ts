import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/models/user.entity';
import { SongModule } from './modules/song/song.module';
import { Song } from './modules/song/models/song.entity';

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
      entities: [User, Song],
      retryAttempts: 5,
      autoLoadEntities: true,
      synchronize: true, // not in production
    }),
    SongModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
