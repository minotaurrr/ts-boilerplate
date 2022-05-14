import express from 'express';
import { UserServiceType } from 'services/user/types';

export const UserRouter = ({ service }: { service: UserServiceType }) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    const { username } = req.query;

    const user = service.findUserByUsername(String(username));

    res.json(user);
  });

  return router;
};
