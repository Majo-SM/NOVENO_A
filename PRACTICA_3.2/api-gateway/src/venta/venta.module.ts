import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { UserController } from './venta.controller';

@Module({
  imports: [ProxyModule],
  controllers: [UserController],
})
export class VentaModule {}
