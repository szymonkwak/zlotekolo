import Joi from 'joi';

const schema = Joi.object().keys({
  nickname: Joi.string().optional(),
  typeOfContract: Joi.string().required(),
  toWorkDistance: Joi.number().required(),
});
export const validateUser = (data: unknown) => {
  return schema.validate(data);
};
