import Joi from 'joi';
import { RequestHandler } from 'express';

type ValidationProperty = 'query' | 'body';

export const validateRequest =
  (schema: Joi.ObjectSchema, property: ValidationProperty): RequestHandler =>
  (req, res, next) => {
    const { error } = schema.validate(req[property]);
    if (error) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');
      console.log('error', message);
      res.status(422).json({ error: message });
    }
    next();
  };
