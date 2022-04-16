import { prismaMock } from '~/common/tests/prisma';
import { request } from '~/common/tests/utils';

describe('Get me handler', () => {
  it('returns Mister Krzysztof', async () => {
    prismaMock.user.findFirst.mockResolvedValue({
      id: 'sample-id',
      username: 'Krzysztof',
      nickname: 'Krzychu',
      email: 'krzy@szt.of',
      avatar: 'sample-avatar',
      surname: 'lastname',
      contractType: 'mandatory conract',
      toWorkDistance: 4,
    });
    const response = await request.get('/api/auth/me');

    expect(response.status).toBe(200);
    expect(response.body.nickname).toBe('Krzychu');
  });
});
