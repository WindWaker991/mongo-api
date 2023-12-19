import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HistorySchema, History } from '../../schemas/history.schema';
import { ProfileModule } from '../profile/profile.module';
import { Profile, ProfileSchema } from '../../schemas/profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: History.name,
        schema: HistorySchema,
      },
      {
        name: Profile.name,
        schema: ProfileSchema,
      },
    ]),
    ProfileModule,
  ],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
