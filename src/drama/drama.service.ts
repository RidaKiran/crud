import { Injectable } from '@nestjs/common';
import { CreateDramaDto } from './dto/create-drama.dto';
import { UpdateDramaDto } from './dto/update-drama.dto';

@Injectable()
export class DramaService {
  create(createDramaDto: CreateDramaDto) {
    return 'This action adds a new drama';
  }

  findAll() {
    return `This action returns all drama`;
  }

  findOne(id: number) {
    return `This action returns a #${id} drama`;
  }

  update(id: number, updateDramaDto: UpdateDramaDto) {
    return `This action updates a #${id} drama`;
  }

  remove(id: number) {
    return `This action removes a #${id} drama`;
  }
}
