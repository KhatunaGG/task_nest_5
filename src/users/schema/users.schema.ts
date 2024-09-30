import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  age: number;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Expense'
    },
  ])
  expenses: [mongoose.Schema.Types.ObjectId];
}

export const UserSchema = SchemaFactory.createForClass(User);
