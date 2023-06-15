import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendEntity } from './entities/friend.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FriendEntity])],
  controllers: [FriendsController],
  providers: [FriendsService]
})
export class FriendsModule {}
