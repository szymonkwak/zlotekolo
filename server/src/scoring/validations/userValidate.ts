import Joi from 'joi';

const schema = Joi.object().keys({
  nickname: Joi.string().optional(),
  typeOfContract: Joi.string().required().messages({
    'string.empty': `Wybierz rodzaj umowy`,
  }),
  toWorkDistance: Joi.number().required().min(2),
});
export const validateUser = (data: unknown) => {
  return schema.validate(data);
};
