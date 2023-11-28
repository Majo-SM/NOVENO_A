import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VentaMSG } from '../common/constants';
import { Observable } from 'rxjs';
import { VentaDTO } from './dto/venta.dto';
import { ClientProxyVeterinaria } from '../common/proxy/client-proxy';
import { IVenta } from './entities/venta.entity';

@Controller('api/venta')
export class UserController {
  constructor(private readonly clientProxy: ClientProxyVeterinaria) {}
  private _clientProxyUser = this.clientProxy.clientProxyCompras();

  @Post()
  create(@Body() userDTO: VentaDTO): Observable<IVenta> {
    return this._clientProxyUser.send(VentaMSG.CREATE, userDTO);
  }

  @Get()
  findAll(): Observable<IVenta[]> {
    return this._clientProxyUser.send(VentaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IVenta> {
    return this._clientProxyUser.send(VentaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() userDTO: VentaDTO,
  ): Observable<IVenta> {
    return this._clientProxyUser.send(VentaMSG.UPDATE, { id, userDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUser.send(VentaMSG.DELETE, id);
  }
}
