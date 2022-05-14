import { UserRouter } from 'routes/user/router';
import express from 'express';
import request from 'supertest';
import { UserServiceType } from 'services/user/types';

const app = express();
const service: UserServiceType = {
  findUserByUsername: jest.fn().mockImplementation((username: string) => ({ username })),
};
const router = UserRouter({ service });

app.use('/', router);

describe('User Router', () => {
  describe('/ - GET', () => {
    it('should do something', async () => {
      const { body, status } = await request(app).get('/?username=test');

      expect(service.findUserByUsername).toHaveBeenCalledWith('test');
      expect(status).toEqual(200);
      expect(body).toEqual({ username: 'test' });
    });
  });
});
