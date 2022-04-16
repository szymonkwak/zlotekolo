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
      email: 'matzaj101@gmail.com',
      avatar: '123',
    };
    const response = await await request.post('/api/users').set('Content-Type', 'application/json').send(payload);

    console.log(' res', response.body);

    expect(response.status).toBe(200);
    expect(response.body.username).toEqual('update');
  });
});
