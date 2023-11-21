import { PartialType } from '@nestjs/mapped-types';
import { CreateVentaDto } from './create-venta.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateVentaDto extends PartialType(CreateVentaDto) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_venta?: string;
}
