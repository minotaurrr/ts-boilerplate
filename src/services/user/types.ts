export type User = { username: string };
export type UserServiceType = {
  findUserByUsername: (username: string) => User;
};
