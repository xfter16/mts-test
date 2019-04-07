import { Controller, Get, Req } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user.model';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
