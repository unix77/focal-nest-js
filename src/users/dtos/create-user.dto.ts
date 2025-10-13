// here we will list all the properties that should come from the requrest & define validation rules for it
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
