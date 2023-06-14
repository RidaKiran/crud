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

@Module({
  imports: [UserModule, RoleModule, StudentModule, TeachersModule, StaffModule, FriendsModule, BooksModule, LibraryModule, DramaModule, ExamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
