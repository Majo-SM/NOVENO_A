import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateVentaDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  id_veterinaria: string;

  @IsString()
  @IsNotEmpty()
  id_cliente: string;

  @IsString()
  @IsNotEmpty()
  id_producto: string;

  @IsString()
  @IsNotEmpty()
  fecha_venta: string;
}
