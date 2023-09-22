import { Module } from '@nestjs/common';
import { SongController } from './Controllers/song.controller';
import { SongService } from './Services/song.service';
import { Song } from './Models/song.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
