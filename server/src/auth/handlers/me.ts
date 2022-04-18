import { RequestHandler } from 'express';

export const getMe: RequestHandler = (req, res) => {
  res.send(req.user);
};
