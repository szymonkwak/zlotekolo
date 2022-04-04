import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
  await prisma.user.deleteMany();

  await prisma.user.create({ data: { email: 'krzysztof@jarzyna.com' } });
})();
