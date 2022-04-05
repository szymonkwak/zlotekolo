import { request } from '~/common/tests/utils';

describe('Get me handler', () => {
  it('returns Mister Krzysztof', async () => {
    const response = await request.get('/api/auth/me');

    expect(response.status).toBe(200);
    expect(response.body.email).toBe('krzysztof@jarzyna.com');
  });
});
