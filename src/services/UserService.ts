import { Inject, Service } from 'typedi';
import { UserRepository } from '../repository/UserRepository';
import { UserEntity } from '../entities/UserEntity';

import { UserDto } from '../dto/UserDto';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
export default class UserService {
  @InjectRepository()
  private readonly _userRepository: UserRepository;

  public async findAll(): Promise<UserEntity[]> {
    return this._userRepository.find();
  }

  public async create(user: UserDto): Promise<UserEntity> {
    return this._userRepository.save(user);
  }
}
