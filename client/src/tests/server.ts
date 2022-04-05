import { rest, ResponseResolver, RestContext, MockedRequest } from 'msw';
import { setupServer } from 'msw/node';
import { getMe } from './mocks/getMe';

const success =
  (data: unknown): ResponseResolver<MockedRequest, RestContext> =>
  (req, res, ctx) =>
    res(ctx.json(data));

const handlers = [rest.get('/api/auth/me', success(getMe))];

export const server = setupServer(...handlers);
