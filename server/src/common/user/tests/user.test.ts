import { prismaMock } from '~/common/tests/prisma';
import { request } from '~/common/tests/utils';

describe('Get User handler', () => {
  it('update user data', async () => {
    prismaMock.user.findFirst.mockResolvedValue({
      id: 'sample-id',
      username: 'username',
      nickname: 'nickname',
      email: 'username@domain.com',
      avatar: 'sample-avatar',
      surname: 'lastname',
      contractType: 'mandatory conract',
      toWorkDistance: 4,
    });
    const payload = {
      username: 'update',
      surname: 'update',
      nickname: 'update',
      contractType: 'b2b',
      toWorkDistance: 7.5,
      email: 'username@domain.com',
      avatar: '123',
    };
    const response = await request.post('/api/users').set('Accept', 'application/json').send(payload);

    expect(response.status).toBe(200);
    // expect(response.body.username).toBeTruthy();
  });
});
