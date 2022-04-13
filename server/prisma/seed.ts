import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
  await prisma.user.deleteMany();

  await prisma.user.create({
    data: { id: '1', username: 'Krzysiu', nickname: 'Krzychu007', email: 'krzy@szt.of', avatar: 'emptyhttps', toWorkDistance: 2.5 },
  });
})();
