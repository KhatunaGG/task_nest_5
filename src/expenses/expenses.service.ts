import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './schema/expenses.schema';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
    private userService: UsersService,
  ) {}



  // async create(createExpenseDto: CreateExpenseDto, user: string) {
  //   const newExpense = await this.expenseModel.create({
  //     ...createExpenseDto,
  //     user,
  //   });
  //   return newExpense;
  // }


  async create(createExpenseDto: CreateExpenseDto, user: string) {
    const newExpense = await this.expenseModel.create({
      ...createExpenseDto,
      user,
    });
    await this.userService.addUsersExpenses(user, newExpense._id)
    return newExpense;
  }



  findAll() {
    return this.expenseModel.find();
  }

  findOne(id: string) {
    return this.expenseModel.findById(id).populate('user');
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    const expense = await this.expenseModel.findById(id);
    if (!expense) throw new NotFoundException();
    const updatedExpense = await this.expenseModel.findByIdAndUpdate(
      id,
      updateExpenseDto,
      { new: true },
    );
    return updatedExpense;
  }

  async remove(id: string) {
    const expense = await this.expenseModel.findById(id);
    if (!expense) throw new NotFoundException();
    const deletedExpense = await this.expenseModel.findByIdAndDelete(id);
    return deletedExpense;
  }


}
