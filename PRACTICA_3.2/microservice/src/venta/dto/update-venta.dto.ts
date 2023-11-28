import { PartialType } from '@nestjs/mapped-types';
import { CreateVentaDto } from './create-venta.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateVentaDto extends PartialType(CreateVentaDto) {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_venta?: string;
}
