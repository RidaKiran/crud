import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { StudentModule } from './student/student.module';
import { TeachersModule } from './teachers/teachers.module';
import { StaffModule } from './staff/staff.module';
import { FriendsModule } from './friends/friends.module';
import { BooksModule } from './books/books.module';
import { LibraryModule } from './library/library.module';
import { DramaModule } from './drama/drama.module';
import { ExamsModule } from './exams/exams.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { TeachersEntity } from './teachers/entities/teacher.entity';
import { StudentEntity } from './student/entities/student.entity';
import { StaffEntity } from './staff/entities/staff.entity';
import { RoleEntity } from './role/entities/role.entity';
import { LibraryEntity } from './library/entities/library.entity';
import { FriendEntity } from './friends/entities/friend.entity';
import { ExamEntity } from './exams/entities/exam.entity';
import { DramaEntity } from './drama/entities/drama.entity';
import { BookEntity } from './books/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'syphilis786',
      database: 'postgres',
      entities: [UserEntity, TeachersEntity,StudentEntity,StaffEntity,RoleEntity,LibraryEntity,FriendEntity,ExamEntity,DramaEntity,BookEntity],
      synchronize: true,
    }),
    UserModule, RoleModule, StudentModule, TeachersModule, StaffModule, FriendsModule, BooksModule, LibraryModule, DramaModule, ExamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
