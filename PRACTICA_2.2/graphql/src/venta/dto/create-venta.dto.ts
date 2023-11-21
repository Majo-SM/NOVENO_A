import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVentaDto {
  @IsString()
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(1)
  id_veterinaria: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_cliente: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_producto: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fecha_venta: string;
}
