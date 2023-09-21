import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song.dto';
import { Song } from './song.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}

  async create(createSongDTO: CreateSongDTO) {
    const songAlreadyExist = await this.findSongByName(createSongDTO.name);
    if (songAlreadyExist) {
      throw new UnauthorizedException(
        `Song ${createSongDTO.name} already exist`,
      );
    }
    return this.songRepository.save(createSongDTO);
  }

  async findSongByName(name: string) {
    return this.songRepository.findOne({ where: { name } });
  }
}
