import { prismaMock } from '~/common/tests/prisma';
import { request } from '~/common/tests/utils';

describe('Get me handler', () => {
  it('returns Mister Krzysztof', async () => {
    prismaMock.user.findFirst.mockResolvedValue({ email: 'krzysztof@jarzyna.com', id: 'sample-id' });
    const response = await request.get('/api/auth/me');

    expect(response.status).toBe(200);
    expect(response.body.email).toBe('krzysztof@jarzyna.com');
  });
});
