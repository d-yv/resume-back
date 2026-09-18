import { celebrate, Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

export const objectIdValidator = (value, helpers) => {
  if (!isValidObjectId(value)) {
    return helpers.message('Invalid Id format');
  }
  return value;
};

export const objectIdValidatorSchema = celebrate({
  [Segments.PARAMS]: Joi.object({
    userId: Joi.string().custom(objectIdValidator).required(),
  }),
});
