import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { authRouter } from './auth/router';
import { scoringRouter } from './scoring/routes';
import { usersRouter } from './users/routes';

dotenv.config();

if (!process.env.CLIENT_URL) {
  // eslint-disable-next-line no-console
  console.error('Missing CLIENT_URL value');
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(cookieParser());
app.use('/api', express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/scoring', scoringRouter);

app.get('/', (req, res) => {
  res.send('ok');
});

export { app };
