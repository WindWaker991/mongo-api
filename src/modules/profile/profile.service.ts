import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from 'src/schemas/profile.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  create(createProfileDto: CreateProfileDto) {
    const newProfile = this.profileModel.create(createProfileDto);
    return newProfile;
  }

  findAll() {
    return this.profileModel.find().populate('history');
  }

  findOne(id: string) {
    return this.profileModel.findById(id).populate('history');
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return this.profileModel.findByIdAndUpdate(id, updateProfileDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.profileModel.findByIdAndDelete(id);
  }
}
