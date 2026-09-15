import { Joi, celebrate, Segments } from 'celebrate';

export const userContactsSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    userId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/) // ObjectId
      .required(),

    phone: Joi.string()
      .pattern(/^\+?[0-9]{7,15}$/)
      .required(),

    email: Joi.string().email().required(),

    telegram: Joi.string()
      .pattern(/^@[A-Za-z0-9_]{5,32}$/)
      .optional(),

    whatsapp: Joi.string()
      .pattern(/^\+?[0-9]{7,15}$/)
      .optional(),

    linkedin: Joi.string()
      .uri()
      .pattern(/^https:\/\/(www\.)?linkedin\.com\/.*$/)
      .optional(),

    github: Joi.string()
      .uri()
      .pattern(/^https:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+$/)
      .optional(),

    city: Joi.string().trim().required(),
    country: Joi.string().trim().required(),
  }),
});
