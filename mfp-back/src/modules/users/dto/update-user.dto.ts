import { additionalUserDTO } from './create-user.dto';
import { createUserDTO } from './create-user.dto';
import { IntersectionType } from '@nestjs/mapped-types';
export class UpdateUserDTO extends IntersectionType(
  createUserDTO,
  additionalUserDTO,
) {}
