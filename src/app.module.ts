import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from './modules/profile/profile.module';
import { HistoryModule } from './modules/history/history.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://windwaker991:alo123@profilesdb.uxu8fdc.mongodb.net/profilesDB?retryWrites=true&w=majority',
    ),
    ProfileModule,
    HistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
