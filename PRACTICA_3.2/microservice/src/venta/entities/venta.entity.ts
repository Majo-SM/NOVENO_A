import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Venta {
  @Prop({ required: true })
  id_veterinaria: string;

  @Prop({ required: true })
  id_cliente: string;

  @Prop({ required: true })
  id_producto: string;

  @Prop({ required: true })
  fecha_venta: string;

  @Prop({ required: true })
  active: boolean;
  default = true;
}

export const VentaSchema = SchemaFactory.createForClass(Venta);

export type VentaDocument = Venta & Document;
export const VentaModel = mongoose.model<VentaDocument>('ventas', VentaSchema);
