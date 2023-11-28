import { Module } from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaController } from './venta.controller';
import { VentaSchema } from './entities/venta.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [VentaController],
  providers: [VentaService],
  imports: [
    MongooseModule.forFeature([
      { name: 'ventas', schema: VentaSchema }, // Registra el esquema de Venta
    ]),
  ],
  exports: [VentaService, MongooseModule],
})
export class VentaModule {}
