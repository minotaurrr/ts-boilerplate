import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { UserRouter } from './routes';
import { errorHandler, notFoundHandler } from './middlewares';

const app = express();
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
});

app.use(rateLimiter);
app.use(helmet());
app.use(compression());

app.use('/user', UserRouter);

app.use(errorHandler);
app.use(notFoundHandler);

export default app;
