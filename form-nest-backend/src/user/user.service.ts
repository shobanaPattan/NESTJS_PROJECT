// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UserService {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(userData: Partial<User>): Promise<User> {
    // console.log('Saving user to DB:', userData);
    // const user = this.userRepository.create(userData);
    // const savedUser = await this.userRepository.save(user);
    // console.log('Saved user:', savedUser);
    // return savedUser;
     const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }
}
