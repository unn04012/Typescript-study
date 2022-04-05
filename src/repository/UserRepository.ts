import { Repository } from 'typeorm';
import { UserEntity } from '../entities/UserEntity';

// Data Mapper 방식
export class UserRepository extends Repository<UserEntity> {
  findAll(firstName: string, lastName: string) {
    return this.createQueryBuilder('user')
      .where('user.firstName = :firstName', { firstName })
      .andWhere('user.lastName = :lastName', { lastName })
      .getMany();
  }
}
