import { Module } from '@nestjs/common';
import { DramaService } from './drama.service';
import { DramaController } from './drama.controller';

@Module({
  controllers: [DramaController],
  providers: [DramaService]
})
export class DramaModule {}
