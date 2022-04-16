import { Request, Response } from 'express';
import { notFoundHandler } from 'middlewares/not-found-handler';

describe('Not Found Handler', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  const next = jest.fn();
  it('should return a 500 json object', () => {
    const mockJson = jest.fn();
    res = { json: mockJson };
    notFoundHandler(req as Request, res as Response, next);
    expect(mockJson).toHaveBeenCalledWith({
      message: 'Route not found',
      status: 404,
    });
  });
});
