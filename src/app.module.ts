import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
