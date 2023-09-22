import { Body, Controller, Post } from '@nestjs/common';
import { SongService } from '../Services/song.service';
import { CreateSongDTO } from '../dto/create-song.dto';

@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  async create(@Body() createSong: CreateSongDTO) {
    return await this.songService.create(createSong);
  }
}
