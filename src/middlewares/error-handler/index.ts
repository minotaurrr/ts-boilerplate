import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (error: Error, req, res, next) => {
  if (error) {
    res.json({
      error,
      status: 500,
    });
  } else {
    next();
  }
};
