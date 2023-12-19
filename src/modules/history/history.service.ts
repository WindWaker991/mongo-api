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

  findOne(id: number) {
    return `This action returns a #${id} history`;
  }

  update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return `This action updates a #${id} history`;
  }

  remove(id: number) {
    return `This action removes a #${id} history`;
  }
}
