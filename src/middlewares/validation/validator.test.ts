import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { validateRequest } from './validator';

describe('Joi Validator', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  describe('validateRequest', () => {
    beforeEach(() => {
      req = {
        body: {
          test: 'test',
        },
      };
      res = {};
      next = jest.fn();
    });

    const schema = Joi.object({
      test: Joi.string().required(),
    });

    it('should return an express request handler', () => {
      const requestHandler = validateRequest(schema, 'body');

      expect(typeof requestHandler).toEqual('function');
      requestHandler(req as Request, res as Response, next);
      expect(next).toHaveBeenCalled();
    });

    it('should return 422 when schema does not match', () => {
      req.body.invalid_param = { details: [{ message: 'some error' }] };
      const mockJson = jest.fn();
      const mockStatus = jest.fn().mockImplementation(() => ({ json: mockJson }));

      res = {
        status: mockStatus,
      };
      const requestHandler = validateRequest(schema, 'body');

      requestHandler(req as Request, res as Response, next);
      expect(mockStatus).toHaveBeenCalledWith(422);
      expect(mockJson).toBeCalledWith({ error: '"invalid_param" is not allowed' });
    });
  });
});
