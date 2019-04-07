import { Controller, Get, Post, Body, Response, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { Users } from './user.entity';
import { ApiImplicitParam, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserResponse } from './userResponse.class';

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ title: 'Get all users'})
  @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: UserResponse, isArray: false})
  async findAll(@Response() res): Promise<{result: Users[]}> {
    const findedUsers = await this.userService.findAll()
                                  .then(users => users.map(user => ({
                                    user_id: user.id,
                                    user_login: user.login,
                                    created_at: user.createdAt,
                                    updated_at: user.updatedAt,
                                    deleted_at: user.deletedAt,
                                  })));
    return res.json({
      result: findedUsers,
    });
  }

  @Post()
  @ApiImplicitParam({ name: 'user_login', type: 'string' })
  @ApiOperation({ title: 'Create new user'})
  @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: UserResponse, isArray: false})
  async create(@Response() res, @Body() body): Promise<Users> {
    if (!!body && !!body.user_login) {
      if (!!(await this.userService.findByLogin(body.user_login))) {
        return res.status(HttpStatus.FORBIDDEN)
                  .json({error: 'This login already in use'});
      }
      return res.json({
        result: await this.userService.create({...body, login: body.user_login}),
      });
    }
    return res.status(HttpStatus.FORBIDDEN)
              .json({error: 'Connot create user without login'});
  }
}
