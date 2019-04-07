import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { User } from './user/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
