import Joi from 'joi';

export const schemas = {
  usernameQuery: Joi.object({
    username: Joi.string().alphanum().required(),
  }),
};
