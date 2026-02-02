import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsString()
  nik: string;

  @IsNotEmpty()
  @IsString()
  nip: string;

  @IsNotEmpty()
  @IsString()
  jabatan: string;

  @IsNotEmpty()
  @IsString()
  alamat: string;

  @IsNotEmpty()
  @IsString()
  noTelp: string;
}
