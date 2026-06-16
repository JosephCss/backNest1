import { LoginAuthDto } from './login-auth.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}
