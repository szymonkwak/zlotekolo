import { User } from '@prisma/client';
import Joi from 'joi';

const schema = Joi.object().keys({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  nickname: Joi.string().required(),
  surname: Joi.string(),
  avatar: Joi.string().required(),
  contractType: Joi.string().required(),
  toWorkDistance: Joi.number().required(),
});
export const validateUser = (data: User) => {
  return schema.validate(data);
};
