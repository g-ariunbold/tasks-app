import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

async function main() {
  const response = await Promise.all([
    prisma.user.upsert({
      where: { email: 'mscott@dmpaper.com' },
      update: {},
      create: {
        name: 'Michael Scott',
        email: 'mscott@dmpaper.com',
      },
    }),
    prisma.user.upsert({
      where: { email: 'dschrute@dmpaper.com' },
      update: {},
      create: {
        name: 'Dwight Schrute',
        email: 'dschrute@dmpaper.com',
      },
    }),
    await prisma.user.upsert({
      where: { email: 'jhalpert@vercel.com' },
      update: {},
      create: {
        name: 'Jim Halpert',
        email: 'jhalpert@dmpaper.com',
      },
    }),
  ])
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })