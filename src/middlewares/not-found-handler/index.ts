import { RequestHandler } from 'express';

export const notFoundHandler: RequestHandler = (req, res) => {
  res.json({
    status: 404,
    message: 'Route not found',
  });
};
