import { Joi, Segments } from 'celebrate';

export const userSchema = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    username: Joi.string().optional(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    avatar: Joi.string().optional(),
  }),
};
