import { IsEmail, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
//not required, we could enabled the plugin https://docs.nestjs.com/openapi/cli-plugin#using-the-cli-plugin

export class createUserDTO {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email is not valid' })
  @ApiProperty({
    example: 'GgVgO@example.com',
    description: 'Email of the user',
  })
  email: string;
  @ApiProperty({
    example: '123456',
    description: 'Password of the user',
  })
  password: string;
}

export class additionalUserDTO {
  @ApiProperty({
    example: 'John38Xx',
    description: 'Username of the user',
  })
  @IsOptional()
  @Length(3, 120, { message: 'Username must be between 3 and 120 characters' })
  username: string;

  @ApiProperty({
    example: 'John',
    description: 'FirstName of the user',
  })
  @IsOptional()
  @Length(3, 120, { message: 'FirstName must be between 3 and 120 characters' })
  firstName: string;

  @ApiProperty({
    example: 'John',
    description: 'LastName of the user',
  })
  @IsOptional()
  @Length(3, 120, { message: 'LastName must be between 3 and 120 characters' })
  lastName: string;

  @ApiProperty({
    example: 18,
    description: 'Age of the user, minimum is 18',
  })
  @IsOptional()
  @Min(18, { message: 'Age must be greater than 18' })
  age: number;

  @ApiProperty({
    example: 'New York',
    description: 'City of the user',
  })
  @IsOptional()
  @Length(3, 120, { message: 'City must be between 3 and 120 characters' })
  city: string;
}
