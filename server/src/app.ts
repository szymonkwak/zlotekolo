import './auth/handlers/googleAuth';

import { profile } from 'console';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { RequestHandler } from 'express-serve-static-core';
import passport from 'passport';

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

const isLogged: RequestHandler = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

app.get('/auth', passport.authenticate('google', { scope: ['profile'] }));
app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/protected', failureRedirect: '/' }));
app.get('/protected', (req, res) => {
  res.send('<h2>Jesteś zalogowany</h2>');
});

export { app };
