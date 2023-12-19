import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { History } from '../../schemas/history.schema';
import { Profile } from '../../schemas/profile.schema';
import { Model } from 'mongoose';

@Injectable()
export class HistoryService {
  constructor(
    @InjectModel(History.name) private historyModel: Model<History>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async create(createHistoryDto: CreateHistoryDto) {
    const { movieId, profileId, calification } = createHistoryDto;
    const profile = await this.profileModel.findById(profileId);
    if (!profile) {
      throw new Error('Profile not found');
    }
    const newHistory = new this.historyModel({
      movieId,
      calification,
    });
    const savedHistory = await newHistory.save();
    await profile.updateOne({
      $push: {
        history: savedHistory._id,
      },
    });

    return newHistory;
  }

  findAll() {
    return this.historyModel.find();
  }

  findOne(id: string) {
    return this.historyModel.find();
  }

  update(id: string, updateHistoryDto: UpdateHistoryDto) {
    return this.historyModel.findByIdAndUpdate(id, updateHistoryDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.historyModel.findByIdAndDelete(id);
  }
}
