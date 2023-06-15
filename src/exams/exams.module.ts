import { Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamEntity } from './entities/exam.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamEntity])],
  controllers: [ExamsController],
  providers: [ExamsService]
})
export class ExamsModule {}
