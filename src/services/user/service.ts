import { UserServiceType } from './types';

export const UserService = (): UserServiceType => {
  const findUserByUsername = (username: string) => ({ username });

  return {
    findUserByUsername,
  };
};
