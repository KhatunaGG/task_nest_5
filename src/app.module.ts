import { Module } from '@nestjs/common';

import { ExpensesModule } from './expenses/expenses.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'process';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ExpensesModule, 
    PostsModule, 
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
