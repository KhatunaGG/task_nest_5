import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { mongo } from 'mongoose';

@Schema()
export class Expense {
  @Prop()
  type: string;

  @Prop()
  amount: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  user: mongoose.Schema.Types.ObjectId;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
