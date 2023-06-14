import { Test, TestingModule } from '@nestjs/testing';
import { DramaController } from './drama.controller';
import { DramaService } from './drama.service';

describe('DramaController', () => {
  let controller: DramaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DramaController],
      providers: [DramaService],
    }).compile();

    controller = module.get<DramaController>(DramaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
