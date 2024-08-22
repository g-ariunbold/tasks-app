import { fetchUsers } from "@/app/lib/data";

export default async function Home() {
  const users = await fetchUsers("");
  return (
    <main>
      <h1 className="font-bold text-xl">Manage your tasks</h1>
      <div>
        <h2 className="font-bold text-lg">Users</h2>
        <ol className="list-inside list-decimal">
          {users?.map((user, i) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ol>
      </div>
    </main>
  );
}
