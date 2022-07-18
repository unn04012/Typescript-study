import { Service } from 'typedi';
import { JsonController, Body, Post, Get } from 'routing-controllers';
import UserService from '../../services/UserService';
import { UserDto } from '../../dto/UserDto';

@Service()
@JsonController()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  public async getUsers() {
    try {
      return this.userService.findAll();
    } catch (err) {
      console.log(err);
    }
  }

  @Post('/users')
  public async createUsers(@Body() userDto: UserDto) {
    try {
      return this.userService.create(userDto);
    } catch (err) {
      console.log(err);
    }
  }
}
