import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Model } from 'mongoose'; // Importa Model desde mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Venta } from './entities/venta.entity';

@Injectable()
export class VentaService {
  private readonly logger = new Logger('VentaService');

  constructor(
    @InjectModel('ventas')
    private readonly ventaModel: Model<Venta>,
  ) {}

  async create(createVentaDto: CreateVentaDto) {
    try {
      const venta = new this.ventaModel(createVentaDto);
      await venta.save();
      return venta;
    } catch (error) {
      console.log(error);
      if (error.code === 11000)
        throw new BadRequestException('Registro duplicado');
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    return this.ventaModel.find({}).exec();
  }

  async findOne(id: string) {
    const venta = await this.ventaModel.findById(id).exec();
    if (!venta) {
      throw new NotFoundException(`Venta ${id} no encontrado`);
    }
    return venta;
  }

  async update(id: string, updateVentaDto: UpdateVentaDto) {
    const venta = await this.ventaModel
      .findByIdAndUpdate(id, updateVentaDto, { new: true })
      .exec();
    if (!venta) {
      throw new NotFoundException(`Venta ${id} no encontrado`);
    }
    return venta;
  }

  async remove(id: string) {
    const venta = await this.findOne(id);
    await venta.updateOne({ active: false });
    return venta;
  }

  async updateAllActive() {
    await this.ventaModel.updateMany({ active: true });
  }

  prueba(): string[] {
    return ['uno', 'dos', 'tres'];
  }
}
