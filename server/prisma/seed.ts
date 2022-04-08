import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
  await prisma.user.deleteMany();

  await prisma.user.create({ data: { nickname: 'Krzysiu', email: 'krzysztof@jarzyna.com', toWorkDistance: 2.5 } });
})();
