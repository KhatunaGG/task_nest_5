import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ExpensesModule } from './expenses/expenses.module';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    ExpensesModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
