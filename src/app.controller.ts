import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { User } from './models/user.model';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userController: UserController,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
