import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DramaService } from './drama.service';
import { CreateDramaDto } from './dto/create-drama.dto';
import { UpdateDramaDto } from './dto/update-drama.dto';

@Controller('drama')
export class DramaController {
  constructor(private readonly dramaService: DramaService) {}

  @Post()
  create(@Body() createDramaDto: CreateDramaDto) {
    return this.dramaService.create(createDramaDto);
  }

  @Get()
  findAll() {
    return this.dramaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dramaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDramaDto: UpdateDramaDto) {
    return this.dramaService.update(+id, updateDramaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dramaService.remove(+id);
  }
}
