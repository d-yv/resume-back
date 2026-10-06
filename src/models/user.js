import { model, Schema } from 'mongoose';
import { UserContacts } from './userContacts.js';
import { UserData } from './userData.js';

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
      default: 'src/images/default-avatar.jpg',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre('save', function () {
  if (!this.username) {
    this.username = this.email;
  }
});

userSchema.pre('findOneAndDelete', async function (next) {
  const userId = this.getQuery()['_id'];
  try {
    await UserContacts.deleteMany({ userId: userId });
    await UserData.deleteMany({ userId: userId });
  } catch (error) {
    next(error);
  }
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const User = model('User', userSchema);
