import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Venta } from './entities/venta.entity';
import { VentaService } from './venta.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Resolver(() => Venta)
export class VentaResolver {
  constructor(private readonly ventaService: VentaService) {}

  @Query(() => [Venta], { name: 'ventas' })
  async getVentas(): Promise<Venta[]> {
    return this.ventaService.findAll();
  }

  @Query(() => Venta, { name: 'venta' })
  async getVenta(@Args('id', { type: () => ID }) id: string): Promise<Venta> {
    return this.ventaService.findOne(id);
  }

  @Mutation(() => Venta)
  async createVenta(
    @Args('createVentaDto') createVentaDto: CreateVentaDto,
  ): Promise<Venta> {
    return this.ventaService.create(createVentaDto);
  }

  @Mutation(() => Venta)
  async updateVenta(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateVentaDto') updateVentaDto: UpdateVentaDto,
  ): Promise<Venta> {
    return this.ventaService.update(id, updateVentaDto);
  }

  @Mutation(() => Venta)
  async removeVenta(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Venta> {
    return this.ventaService.remove(id);
  }

  @Mutation(() => Venta)
  async updateAllActiveVenta(): Promise<void> {
    return this.ventaService.updateAllActive();
  }
}
