import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity'; // connect entity with app module

@Module({
  // here we will connect the databse to our app module
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // here we set what db are we using
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'focal_nest_db', // our db name
      entities: [User], //here we will add our entities
      // this is thanks to typeorm
      synchronize: true, // this is only used at the dev env. (it creates tables automatically in the db, without writing migrations
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
