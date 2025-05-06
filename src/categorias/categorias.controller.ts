import { Controller, Get, Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.entity';

@Controller('categoria')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    try {
      return await this.categoriasService.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException({ error: 'Categoría no encontrada' });
      }
      throw error;
    }
  }
}