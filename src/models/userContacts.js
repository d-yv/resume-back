import { model, Schema } from 'mongoose';

const userContactsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    telegram: {
      type: String,
      trim: true,
      required: false,
    },
    whatsapp: {
      type: String,
      trim: true,
      required: false,
    },
    linkedin: {
      type: String,
      trim: true,
      required: false,
    },
    github: {
      type: String,
      trim: true,
      required: false,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    country: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const UserContact = model('UserContacts', userContactsSchema);
