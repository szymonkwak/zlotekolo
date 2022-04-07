import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { authRouter } from './auth/router';

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use('/api', express.json());
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('ok');
});

export { app };
