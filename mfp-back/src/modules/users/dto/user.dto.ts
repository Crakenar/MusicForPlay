import { IsEmail, IsNotEmpty } from 'class-validator';
export class UserDTO {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email is not valid' })
  email: string;
  @IsNotEmpty({ message: 'Email is required' })
  password: string;
  username: string;
  firstName: string;
  lastName: string;
}
