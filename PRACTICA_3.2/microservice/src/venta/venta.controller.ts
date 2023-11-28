import { Controller } from '@nestjs/common';
import { VentaService } from './venta.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VentaMsg } from 'src/common/constants';

@Controller('venta')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @MessagePattern(VentaMsg.CREATE)
  create(@Payload() createVentaDto: CreateVentaDto) {
    return this.ventaService.create(createVentaDto);
  }

  @MessagePattern(VentaMsg.FIND_ALL)
  findAll() {
    return this.ventaService.findAll();
  }

  @MessagePattern(VentaMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.ventaService.findOne(id);
  }

  @MessagePattern(VentaMsg.UPDATE)
  update(@Payload() id: string, @Payload() updateVentaDto: UpdateVentaDto) {
    return this.ventaService.update(id, updateVentaDto);
  }

  @MessagePattern(VentaMsg.DELETE)
  remove(@Payload() id: string) {
    return this.ventaService.remove(id);
  }
}
