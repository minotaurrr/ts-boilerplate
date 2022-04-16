import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  const { username } = req.query;
  res.json({ username });
});

export default router;
