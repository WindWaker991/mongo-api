import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Profile } from './profile.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class History {
  @Prop()
  movieId: string;

  @Prop()
  calification: boolean;
}

export const HistorySchema = SchemaFactory.createForClass(History);
