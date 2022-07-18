import { Inject, Service } from 'typedi';
import { Repository, EntityManager, EntityRepository } from 'typeorm';
import { UserEntity } from '../entities/UserEntity';

@Service()
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
