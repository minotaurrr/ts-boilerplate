import { Request, Response } from 'express';
import { errorHandler } from 'middlewares/error-handler';

describe('Error Handler', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  const next = jest.fn();

  it('should call next() when no error is found', () => {
    errorHandler(null, {} as Request, {} as Response, next);
    expect(next).toHaveBeenCalled();
  });

  it('should return an error', () => {
    const mockJson = jest.fn();
    res = { json: mockJson };
    const error = new TypeError('some error');
    errorHandler(error, req as Request, res as Response, next);
    expect(mockJson).toHaveBeenCalledWith({
      error,
      status: 500,
    });
  });
});
