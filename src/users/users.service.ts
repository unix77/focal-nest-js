import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  // here we need the user repository, so we inject it
  // inject repository decorator is needed because automatically the code does not infer which is the generic type used by the repository
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  // the above code is the same as the below one
  // repo: Repository<User>;
  // // here we need the user repository, so we inject it
  // constructor(@InjectRepository(User) repo: Repository<User>) {
  //   this.repo = repo;
  // }

  create(email: string, password: string) {
    // creates the user entity instance
    const user = this.repo.create({ email, password });

    // saves this created entity instance in the db
    return this.repo.save(user);
  }
}
