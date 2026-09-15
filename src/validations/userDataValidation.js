import { Joi, celebrate, Segments } from 'celebrate';

export const userDataSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    userId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/) // ObjectId
      .required(),

    techSkills: Joi.array().items(Joi.string().trim().min(1)).optional(),

    softSkills: Joi.array().items(Joi.string().trim().min(1)).optional(),

    languages: Joi.array().items(Joi.string().trim().min(1)).optional(),
  }),
});
