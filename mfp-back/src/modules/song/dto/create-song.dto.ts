import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateSongDTO {
  @ApiProperty({
    example: 'My Song',
    description: 'Name of the song',
  })
  name: string;
  @IsOptional()
  @ApiProperty({
    example: 'My Song Description',
    description: 'Description of the song',
  })
  description: string;
  @ApiProperty({
    example: 1,
    description: 'Author of the song',
  })
  authorId: number;
}
