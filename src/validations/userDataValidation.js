import { Joi, celebrate, Segments } from 'celebrate';
import { objectIdValidator } from './idValidation.js';

export const userDataSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    userId: Joi.string().custom(objectIdValidator).required(),

    techSkills: Joi.array().items(Joi.string().trim().min(1)).optional(),

    softSkills: Joi.array().items(Joi.string().trim().min(1)).optional(),

    languages: Joi.array().items(Joi.string().trim().min(1)).optional(),
  }),
});
