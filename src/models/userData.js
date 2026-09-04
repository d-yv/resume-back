import { model, Schema } from 'mongoose';

const userDataSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    techSkills: {
      type: [Array],
      trim: true,
      required: false,
    },
    softSkills: {
      type: [Array],
      trim: true,
      required: false,
    },
    languages: {
      type: [Array],
      trim: true,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const UserData = model('UserData', userDataSchema);
