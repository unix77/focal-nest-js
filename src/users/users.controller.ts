import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

// prefix of all the routes we define here
@Controller('auth')
export class UsersController {
  // This line kinda creates an attribute and automatically assigns the value passed in the constructor (shortcut)
  constructor(private usersService: UsersService) {}

  // here we will use the body decorator to extract the body from the request
  @Post('signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
    // I do not have to validate anything cause it is done at the dto
    return this.usersService.create(body.email, body.password);
  }
}
