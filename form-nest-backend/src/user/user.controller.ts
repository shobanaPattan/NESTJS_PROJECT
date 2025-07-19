// import { Controller } from '@nestjs/common';

// @Controller('user')
// export class UserController {}

import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('submit')
  createUser(@Body() userData: Partial<User>) {
    console.log('Received userData:', userData);
    return this.userService.create(userData);
  }
}

