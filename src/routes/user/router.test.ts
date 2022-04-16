import router from 'routes/user/router';
import express from 'express';
import request from 'supertest';

const app = express();
app.use('/', router);

describe('User Router', () => {
  describe('/ - GET', () => {
    it('should do something', async () => {
      const { body, status } = await request(app).get('/?username=test');
      expect(status).toEqual(200);
      expect(body).toEqual({ username: 'test' });
    });
  });
});
