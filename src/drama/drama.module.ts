import { Module } from '@nestjs/common';
import { DramaService } from './drama.service';
import { DramaController } from './drama.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DramaEntity } from './entities/drama.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DramaEntity])],
  controllers: [DramaController],
  providers: [DramaService]
})
export class DramaModule {}
