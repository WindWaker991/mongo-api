import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { History } from './history.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Profile {
  @Prop()
  name: string;

  @Prop()
  accountId: string;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'History',
    },
  ])
  history: History[];
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
