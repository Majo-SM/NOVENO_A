import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Venta {
  @Field()
  @Prop({ required: true })
  id_veterinaria: string;

  @Field()
  @Prop({ required: true })
  id_cliente: string;

  @Field()
  @Prop({ required: true })
  id_producto: string;

  @Field()
  @Prop({ required: true })
  fecha_venta: string;

  @Field()
  @Prop({ required: true })
  active: boolean;
  default = true;
}

export const VentaSchema = SchemaFactory.createForClass(Venta);

export type VentaDocument = Venta & Document;
export const VentaModel = mongoose.model<VentaDocument>('ventas', VentaSchema);
