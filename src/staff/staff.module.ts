import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffEntity } from './entities/staff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StaffEntity])],
  controllers: [StaffController],
  providers: [StaffService]
})
export class StaffModule {}
