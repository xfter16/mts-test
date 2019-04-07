import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
              .then(res => {
                // tslint:disable-next-line:no-console
                console.log('user: ', res);
                return res;
              });
  }

  async create(user: User): Promise<User|null> {
    const createdUser = await this.userRepository.create(user);
    return this.userRepository.save(createdUser)
            .then(res => {
              // tslint:disable-next-line:no-console
              console.log('user: ', res);
              return res;
            });
  }
}
