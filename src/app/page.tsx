import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <main>
      <h1 className='font-bold'>Manage your tasks</h1>
      {users.map((user, i)=> {
        return <div key={user.id}>{user.name}</div>
      })}
    </main>
  );
}
