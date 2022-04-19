import { User } from '@prisma/client';
import Joi from 'joi';

const schema = Joi.object().keys({
  nickname: Joi.string().allow(null, ''),
  contractType: Joi.string().required(),
  toWorkDistance: Joi.number().required(),
});
export const validateUser = (data: User) => {
  return schema.validate(data);
};
