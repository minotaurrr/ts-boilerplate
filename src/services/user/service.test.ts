import { UserService } from './service';

describe('UserService', () => {
  const service = UserService();

  it('findUserByUsername', () => {
    const result = service.findUserByUsername('test');

    expect(result).toEqual({ username: 'test' });
  });
});
