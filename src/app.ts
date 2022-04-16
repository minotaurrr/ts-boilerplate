import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { UserRouter } from './routes';
import { errorHandler } from './middlewares';

const app = express();
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
});

app.use(rateLimiter);
app.use(helmet());

app.use('/user', UserRouter);

app.use(errorHandler);

export default app;
