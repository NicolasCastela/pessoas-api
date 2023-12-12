import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePessoaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  idade: number;
}
