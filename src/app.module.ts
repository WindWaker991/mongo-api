import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from './modules/profile/profile.module';
import { HistoryModule } from './modules/history/history.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/profilesDB'),
    ProfileModule,
    HistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
