import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/user/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.userRepository.find()
              .then(res => {
                // tslint:disable-next-line:no-console
                console.log('user: ', res);
                return res;
              });
  }

  async create(user: Users): Promise<Users|null> {
    const createdUser = await this.userRepository.create(user);
    return this.userRepository.save(createdUser)
            .then(res => {
              // tslint:disable-next-line:no-console
              console.log('user: ', res);
              return res;
            });
  }

  async findByLogin(login: string): Promise<Users> {
    return await this.userRepository.findOne({
      where: { login },
    })
    .then(res => {
      // tslint:disable-next-line:no-console
      console.log('user: ', res);
      return res;
    });
  }
}
